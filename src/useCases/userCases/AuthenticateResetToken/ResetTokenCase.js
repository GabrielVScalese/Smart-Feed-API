const ResetTokensRepository = require("../../../repositories/ResetTokensRepository");
const { verify } = require("jsonwebtoken");
const dayjs = require("dayjs");

class ResetTokenCase {
  async execute(data) {
    try {
      const resetTokensRepository = new ResetTokensRepository();
      const resetToken = await resetTokensRepository.findById(
        data["resetTokenId"]
      );

      if (!resetToken) throw new Error("Invalid reset token id");

      const isExpired = dayjs().isAfter(dayjs.unix(resetToken["expires_in"]));

      if (isExpired) throw new Error("Reset token id is invalid");

      const decoded = verify(resetToken["token"], process.env.SECRET_KEY);
      decoded["token"] = resetToken["token"];

      await resetTokensRepository.destroyById(resetToken["id"]);

      return decoded;
    } catch (err) {
      throw new Error("Invalid reset token id");
    }
  }
}

module.exports = ResetTokenCase;
