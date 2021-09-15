const CreateScheduleCase = require("./CreateScheduleCase.js");

module.exports = {
  async handle(req, res) {
    const { pet_id, time } = req.body;

    try {
      const createScheduleCase = new CreateScheduleCase();

      const newSchedule = await createScheduleCase.execute({ pet_id, time });

      return res.status(200).json(newSchedule);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
