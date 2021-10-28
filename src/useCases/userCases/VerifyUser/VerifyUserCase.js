const ActivationIdsRepository = require("../../../repositories/ActivationIdsRepository");
const UsersRepository = require("../../../repositories/UsersRepository");

class VerifyUserCase {
  async execute(data) {
    const activationIdsRepository = new ActivationIdsRepository();
    const activationId = await activationIdsRepository.findById(
      data["activationId"]
    );

    const usersRepository = new UsersRepository();
    await usersRepository.update({
      id: activationId["user_id"],
      verified: true,
    });

    await activationIdsRepository.destroyByUserId(activationId["user_id"]);
  }
}

module.exports = VerifyUserCase;
