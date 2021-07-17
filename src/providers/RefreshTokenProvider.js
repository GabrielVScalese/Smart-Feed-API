const RefreshTokensRepository = require("../repositories/RefreshTokensRepository");
const dayjs = require("dayjs");
const { v4 } = require("uuid");

class RefreshTokenProvider {
  async execute(userId) {
    const refreshTokensRepository = new RefreshTokensRepository();

    const expiresIn = dayjs().add(15, "day").unix();

    await refreshTokensRepository.destroyByUserId(userId);
    const newRefreshToken = await refreshTokensRepository.save({
      id: v4(),
      user_id: userId,
      expires_in: expiresIn,
    });

    return newRefreshToken;
  }
}

module.exports = RefreshTokenProvider;
