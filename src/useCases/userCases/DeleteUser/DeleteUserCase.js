const ActivationIdsRepository = require("../../../repositories/ActivationIdsRepository");
const UsersRepository = require("../../../repositories/UsersRepository");

class DeleteUserCase {
  async execute(id) {
    const usersRepository = new UsersRepository();
    const userAlreadyExists = await usersRepository.findById(id);

    if (!userAlreadyExists) throw new Error("Nonexistent user");

    const activationIdsRepository = new ActivationIdsRepository();
    await activationIdsRepository.destroyByUserId(userAlreadyExists["id"]);

    await usersRepository.destroy(id);
  }
}

module.exports = DeleteUserCase;
