const RefreshToken = require("../models/RefreshToken");

class RefreshTokensRepository {
  async findById(id) {
    const refreshToken = await RefreshToken.findOne({
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
}

module.exports = RefreshTokensRepository;
