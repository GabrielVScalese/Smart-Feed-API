const { sign } = require("jsonwebtoken");

class TokenProvider {
  execute(userId) {
    const token = sign({ id: userId }, process.env.SECRET_KEY, {
      expiresIn: 86400,
    });

    return token;
  }
}

module.exports = TokenProvider;
