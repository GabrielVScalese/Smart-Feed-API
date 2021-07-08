const UsersRepository = require("../../../repositories/UsersRepository");

class CreateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(data["email"]);

    if (userAlreadyExists) throw new Error("User already exists");

    const new_user = await usersRepository.save(data);

    return new_user;
  }
}

module.exports = CreateUserCase;
