const ActivationIdsRepository = require("../repositories/ActivationIdsRepository");
const MailProvider = require("../providers/MailProvider");

const dayjs = require("dayjs");
const { v4 } = require("uuid");

class ActivationIdProvider {
  async execute(user) {
    const activationIdsRepository = new ActivationIdsRepository();
    const expiresIn = dayjs().add(1, "day").unix();
    const activationId = await activationIdsRepository.save({
      id: v4(),
      user_id: user["id"],
      expires_in: expiresIn,
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
      subject: "Seja bem vindo ao nosso app",
      body: `<p>Olá ${user["name"]}, acesse esse link para ativar sua conta: <a>https://smart-feed-web.vercel.app/users/activateAccount/${activationId["id"]}</a></p>`,
    });

    return activationId;
  }
}

module.exports = ActivationIdProvider;
