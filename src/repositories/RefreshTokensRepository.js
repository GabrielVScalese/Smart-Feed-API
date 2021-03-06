const RefreshToken = require("../models/RefreshToken");

class RefreshTokensRepository {
  async findById(id) {
    const refreshToken = await RefreshToken.findOne({
      attributes: ["id", "user_id", "expires_in"],
      where: {
        id: id,
      },
    });

    return refreshToken;
  }

  async save(refreshToken) {
    const newRefreshToken = await RefreshToken.create(refreshToken);

    return newRefreshToken;
  }

  async destroy(id) {
    await RefreshToken.destroy({
      where: {
        id: id,
      },
    });
  }

  async destroyByUserId(userId) {
    await RefreshToken.destroy({
      where: {
        user_id: userId,
      },
    });
  }
}

module.exports = RefreshTokensRepository;
