const UsersRepository = require("../../../repositories/UsersRepository");

class UpdateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findById(data["id"]);

    if (!userAlreadyExists) throw new Error("Nonexistent user");

    await usersRepository.update(data);
  }
}

module.exports = UpdateUserCase;
