const UsersRepository = require("../../../repositories/UsersRepository");

const ActivationIdProvider = require("../../../providers/ActivationIdProvider");

class CreateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(data["email"]);

    if (userAlreadyExists) throw new Error("Email já cadastrado");

    const new_user = await usersRepository.save(data);

    const activationIdProvider = new ActivationIdProvider();
    const activationId = await activationIdProvider.execute(new_user);

    const user = new_user.get();
    user["activationId"] = activationId["id"];
    return user;
  }
}

module.exports = CreateUserCase;
