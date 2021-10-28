const ActivationIdsRepository = require("../../../repositories/ActivationIdsRepository");
const { verifyUser } = require("../../../helpers/verifyUser");
const UsersRepository = require("../../../repositories/UsersRepository");

class VerifyUserCase {
  async execute(data) {
    const usersExists = await verifyUser(data["email"]);

    if (!usersExists) throw new Error("Nonexistent user");

    const usersRepository = new UsersRepository();
    await usersRepository.update({ id: usersExists["id"], verified: true });

    const activationIdsRepository = new ActivationIdsRepository();
    await activationIdsRepository.destroyByUserId(usersExists["id"]);
  }
}

module.exports = VerifyUserCase;
