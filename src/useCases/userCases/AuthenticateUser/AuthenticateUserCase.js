const UsersRepository = require("../../../repositories/UsersRepository");
const TokenProvider = require("../../../providers/TokenProvider");
const RefreshTokenProvider = require("../../../providers/RefreshTokenProvider");
const ActivationIdsRepository = require("../../../repositories/ActivationIdsRepository");

const dayjs = require("dayjs");
const { compare } = require("bcryptjs");
const ActivationIdProvider = require("../../../providers/ActivationIdProvider");

class AuthenticateUserCase {
  async execute(data) {
    const usersRepository = new UsersRepository();
    const userAlreadyExists = await usersRepository.findByEmail(data["email"]);

    if (!userAlreadyExists) throw new Error("Nonexistent user");

    if (!userAlreadyExists["verified"]) {
      const activationIdsRepository = new ActivationIdsRepository();
      const activationId = await activationIdsRepository.findByUserId(
        userAlreadyExists["id"]
      );

      const isExpired = dayjs().isAfter(dayjs.unix(activationId["expires_in"]));

      if (isExpired) {
        const activationIdProvider = new ActivationIdProvider();
        await activationIdProvider.execute(userAlreadyExists);
      }

      throw new Error("A conta não foi verificada ainda");
    }

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
