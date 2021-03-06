const Schedule = require("../models/Schedule");

class SchedulesRepository {
  async findByPetId(petId) {
    const schedules = await Schedule.findAll({
      attributes: ["time"],
      where: {
        pet_id: petId,
      },
      raw: true,
    });

    return schedules;
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

  async update(petId, schedules) {
    await Schedule.destroy({
      where: {
        pet_id: petId,
      },
    });

    await this.save(petId, schedules);
  }
}

module.exports = SchedulesRepository;
