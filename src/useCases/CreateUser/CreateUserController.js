const CreateUserCase = require("./CreateUserCase");

module.exports = {
  async handle(req, res) {
    const { name, email, password } = req.body;

    try {
      const createUserCase = new CreateUserCase();
      const user = await createUserCase.execute({
        name: name,
        email: email,
        password: password,
        verified: false,
      });

      return res.status(200).json(user);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
