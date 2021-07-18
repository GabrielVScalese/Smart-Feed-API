const { sign } = require("jsonwebtoken");

class TokenProvider {
  execute(userId) {
    const token = sign({ id: userId }, process.env.SECRET_KEY, {
      expiresIn: 20,
    });

    return token;
  }
}

module.exports = TokenProvider;
