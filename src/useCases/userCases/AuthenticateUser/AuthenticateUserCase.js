const UsersRepository = require("../../../repositories/UsersRepository");
const TokenProvider = require("../../../providers/TokenProvider");
const { compare } = require("bcryptjs");

class AuthenticateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();
    const userAlreadyExists = await usersRepository.findByEmail(data["email"]);

    if (!userAlreadyExists) throw new Error("Nonexistent user");

    const passwordMatch = await compare(
      data["password"],
      userAlreadyExists["password"]
    );

    if (!passwordMatch) throw new Error("Unauthorized user");

    const tokenProvider = new TokenProvider();
    const token = tokenProvider.execute(userAlreadyExists["id"]);

    userAlreadyExists["password"] = undefined;

    return { user: userAlreadyExists, token };
  }
}

module.exports = AuthenticateUserCase;
