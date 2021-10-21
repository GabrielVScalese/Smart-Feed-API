const { verify } = require("jsonwebtoken");

class ResetTokenCase {
  execute(data) {
    try {
      const decoded = verify(data["token"], process.env.SECRET_KEY);

      return decoded;
    } catch (err) {
      throw new Error("Invalid token");
    }
  }
}

module.exports = ResetTokenCase;
