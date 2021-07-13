const RefreshTokensRepository = require("../../repositories/RefreshTokensRepository");
const TokenProvider = require("../../providers/TokenProvider");
const RefreshTokenProvider = require("../../providers/RefreshTokenProvider");
const dayjs = require("dayjs");

class RefreshTokenCase {
  async execute(data) {
    const refreshTokensRepository = new RefreshTokensRepository();
    const refreshToken = await refreshTokensRepository.findById(data["id"]);

    if (!refreshToken) throw new Error("Invalid refresh token");

    const isExpired = dayjs().isAfter(dayjs.unix(refreshToken["expires_in"]));

    const tokenProvider = new TokenProvider();
    const token = tokenProvider.execute(refreshToken["user_id"]);

    if (isExpired) {
      await refreshTokensRepository.destroy(refreshToken["id"]);

      const refreshTokenProvider = new RefreshTokenProvider();
      const newRefreshToken = await refreshTokenProvider.execute(
        refreshToken["user_id"]
      );

      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}

module.exports = RefreshTokenCase;
