const UsersRepository = require("../../../repositories/UsersRepository");
const TokenProvider = require("../../../providers/TokenProvider");
const RefreshTokenProvider = require("../../../providers/RefreshTokenProvider");
const { compare } = require("bcryptjs");

class AuthenticateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();
    const userAlreadyExists = await usersRepository.findByEmail(data["email"]);

    if (!userAlreadyExists) throw new Error("Nonexistent user");

    if (!userAlreadyExists["verified"])
      throw new Error("User account is not verified");

    const passwordMatch = await compare(
      data["password"],
      userAlreadyExists["password"]
    );

    if (!passwordMatch) throw new Error("Unauthorized user");

    const tokenProvider = new TokenProvider();
    const token = tokenProvider.execute(userAlreadyExists["id"]);

    const refreshTokenProvider = new RefreshTokenProvider();
    const refreshToken = await refreshTokenProvider.execute(
      userAlreadyExists["id"]
    );

    userAlreadyExists["password"] = undefined;

    return { user: userAlreadyExists, token, refreshToken };
  }
}

module.exports = AuthenticateUserCase;
