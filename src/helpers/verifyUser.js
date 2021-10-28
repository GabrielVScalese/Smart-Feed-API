const UsersRepository = require("../repositories/UsersRepository");

module.exports = {
  async verifyUser(email) {
    const usersRepository = new UsersRepository();
    const userExists = await usersRepository.findByEmail(email);

    return userExists;
  },
};
