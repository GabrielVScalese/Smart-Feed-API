const UsersRepository = require("../../../repositories/UsersRepository");
const { sign } = require("jsonwebtoken");
const MailProvider = require("../../../providers/MailProvider");

class ResetPasswordCase {
  async execute(data) {
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByEmail(data["email"]);

    if (!user) throw new Error("Nonexistent user");

    const token = sign(
      {
        id: user["id"],
        name: user["name"],
        email: user["email"],
      },
      process.env.SECRET_KEY,
      { expiresIn: 300 }
    );

    const mailProvider = new MailProvider();
    mailProvider.sendEmail({
      to: {
        name: user["name"],
        email: user["email"],
      },
      from: {
        name: "Smart Feed",
        email: process.env.EMAIL,
      },
      subject: "Recuperar senha da conta",
      body: `<p>Olá ${user["name"]}, acesse link para recuperar sua senha: <a>http://localhost:3000/${token}</a></p>`,
    });

    return token;
  }
}

module.exports = ResetPasswordCase;
