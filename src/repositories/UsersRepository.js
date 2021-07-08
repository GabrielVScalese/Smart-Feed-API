const User = require("../models/User");
const { hash } = require("bcryptjs");

class UsersRepository {
  async findByEmail(email) {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    return user;
  }

  async save(user) {
    const passwordHash = await hash(user["password"], 8);

    const new_user = await User.create({
      name: user["name"],
      email: user["email"],
      password: passwordHash,
      verified: user["verified"],
    });

    return new_user;
  }
}

module.exports = UsersRepository;
