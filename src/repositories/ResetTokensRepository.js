const ResetToken = require("../models/ResetToken");

class ResetTokensRepository {
  async findById(id) {
    const resetToken = await ResetToken.findOne({
      where: {
        id: id,
      },
    });

    return resetToken;
  }

  async save(resetToken) {
    const newResetToken = await ResetToken.create(resetToken);

    return newResetToken;
  }

  async destroyById(id) {
    await ResetToken.destroy({
      where: {
        id: id,
      },
    });
  }

  async destroyByUserId(userId) {
    await ResetToken.destroy({
      where: {
        user_id: userId,
      },
    });
  }
}

module.exports = ResetTokensRepository;
