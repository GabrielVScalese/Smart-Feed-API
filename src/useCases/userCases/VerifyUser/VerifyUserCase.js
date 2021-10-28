const ActivationIdsRepository = require("../../../repositories/ActivationIdsRepository");
const UsersRepository = require("../../../repositories/UsersRepository");

const dayjs = require("dayjs");

class VerifyUserCase {
  async execute(data) {
    const activationIdsRepository = new ActivationIdsRepository();
    const activationId = await activationIdsRepository.findById(
      data["activationId"]
    );

    const isExpired = dayjs().isAfter(dayjs.unix(activationId["expires_in"]));

    if (isExpired) throw new Error("Expired activation id");

    const usersRepository = new UsersRepository();
    await usersRepository.update({
      id: activationId["user_id"],
      verified: true,
    });

    await activationIdsRepository.destroyByUserId(activationId["user_id"]);
  }
}

module.exports = VerifyUserCase;
