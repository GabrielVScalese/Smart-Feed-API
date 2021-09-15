const Schedule = require("../models/Schedule");

class SchedulesRepository {
  async findByPetId(petId) {
    const schedules = await Schedule.findAll({
      where: {
        pet_id: petId,
      },
    });

    return schedules;
  }

  async save(schedule) {
    const newSchedule = await Schedule.create(schedule);

    return newSchedule;
  }
}

module.exports = SchedulesRepository;
