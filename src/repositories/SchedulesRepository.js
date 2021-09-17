const Schedule = require("../models/Schedule");

class SchedulesRepository {
  async findByPetId(petId) {
    const schedules = await Schedule.findAll({
      attributes: ["time"],
      where: {
        pet_id: petId,
      },
    });

    return schedules.map(function (schedule) {
      return schedule.get("time");
    });
  }

  async save(petId, schedules) {
    const newSchedules = [];
    for (let i = 0; i < schedules.length; i++) {
      const newSchedule = await Schedule.create({
        pet_id: petId,
        time: schedules[i],
      });

      newSchedules.push(newSchedule.get("time"));
    }

    return newSchedules;
  }
}

module.exports = SchedulesRepository;
