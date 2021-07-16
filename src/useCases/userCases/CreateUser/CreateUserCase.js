const MailProvider = require("../../../providers/MailProvider");
const UsersRepository = require("../../../repositories/UsersRepository");

class CreateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(data["email"]);

    if (userAlreadyExists) throw new Error("User already exists");

    const new_user = await usersRepository.save(data);

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
      body:
        "<p><strong>Olá, " +
        data["name"] +
        "</strong></p><p>Bem vindo, </p> <p>Primeiramente, antes de utilizar nosso app, <strong>você precisa ativar sua conta</strong></p><div style='justify-content: center; display: flex;'><input type='button' value='ATIVAR CONTA' style='background-color: #0099ff; height: 9vh; width: 70%;color: white; font-weight: bold;'></div>",
    });

    return new_user;
  }
}

module.exports = CreateUserCase;
