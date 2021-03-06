const dayjs = require("dayjs");
const { sign } = require("jsonwebtoken");
const { v4 } = require("uuid");

const UsersRepository = require("../../../repositories/UsersRepository");
const ResetTokensRepository = require("../../../repositories/ResetTokensRepository");
const MailProvider = require("../../../providers/MailProvider");

class ResetPasswordCase {
  async execute(data) {
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByEmail(data["email"]);

    if (!user) throw new Error("Nonexistent user");

    const resetTokensRepository = new ResetTokensRepository();
    await resetTokensRepository.destroyByUserId(user["id"]);

    const token = sign(
      {
        id: user["id"],
        name: user["name"],
        email: user["email"],
      },
      process.env.SECRET_KEY,
      { expiresIn: 300 }
    );

    const expiresIn = dayjs().add(5, "minute").unix();
    const resetToken = await resetTokensRepository.save({
      id: v4(),
      token: token,
      expires_in: expiresIn,
      user_id: user["id"],
    });

    const mailProvider = new MailProvider();
    await mailProvider.sendEmail({
      to: {
        name: user["name"],
        email: user["email"],
      },
      from: {
        name: "Equipe do Smart Feed",
        email: process.env.EMAIL,
      },
      subject: "Recuperar senha da conta",
      body: `<p>Olá ${user["name"]}, acesse <a href='https://smart-feed-web.vercel.app/users/resetPassword/${resetToken["id"]}'>esse link</a> para recuperar sua senha</p>`,
    });

    return resetToken["id"];
  }
}

module.exports = ResetPasswordCase;
