const ResetTokensRepository = require("../../../repositories/ResetTokensRepository");

class DeleteResetTokenCase {
  async execute(data) {
    const resetTokensRepository = new ResetTokensRepository();
    const resetToken = await resetTokensRepository.findById(data);

    if (!resetToken) throw new Error("Nonexistent reset token");

    await resetTokensRepository.destroyById(data);
  }
}

module.exports = DeleteResetTokenCase;
