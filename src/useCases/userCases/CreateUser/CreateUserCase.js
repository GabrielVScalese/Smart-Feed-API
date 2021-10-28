const MailProvider = require("../../../providers/MailProvider");
const ActivationIdsRepository = require("../../../repositories/ActivationIdsRepository");
const UsersRepository = require("../../../repositories/UsersRepository");

const { v4 } = require("uuid");

class CreateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(data["email"]);

    if (userAlreadyExists) throw new Error("User already exists");

    const new_user = await usersRepository.save(data);

    const activationIdsRepository = new ActivationIdsRepository();
    const activationId = await activationIdsRepository.save({
      id: v4(),
      user_id: new_user["id"],
    });

    const mailProvider = new MailProvider();
    await mailProvider.sendEmail({
      to: {
        name: data["name"],
        email: data["email"],
      },
      from: {
        name: "Equipe do Smart Feed",
        email: process.env.EMAIL,
      },
      subject: "Seja bem vindo ao nosso app",
      body: `<p>Olá ${new_user["name"]}, acesse esse link para ativar sua conta: <a>https://smart-feed-web.vercel.app/users/activateAccount/${activationId["id"]}</a></p>`,
    });

    return new_user;
  }
}

module.exports = CreateUserCase;
