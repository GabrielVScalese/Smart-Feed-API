const ResetTokensRepository = require("../../../repositories/ResetTokensRepository");
const { verify } = require("jsonwebtoken");
const dayjs = require("dayjs");

class AuthResetTokenCase {
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

      return decoded;
    } catch (err) {
      throw new Error("Invalid reset token id");
    }
  }
}

module.exports = AuthResetTokenCase;
