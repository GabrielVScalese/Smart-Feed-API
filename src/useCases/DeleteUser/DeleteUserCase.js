const UsersRepository = require("../../repositories/UsersRepository");

class DeleteUserCase {
  async execute(id) {
    const usersRepository = new UsersRepository();
    const userAlreadyExists = await usersRepository.findById(id);

    if (!userAlreadyExists) throw new Error("Nonexistent user");

    await usersRepository.destroy(id);
  }
}

module.exports = DeleteUserCase;
