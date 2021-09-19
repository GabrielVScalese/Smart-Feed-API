const Schedule = require("../models/Schedule");

class SchedulesRepository {
  async findByPetIds(petIds) {
    let petsSchedules = [];

    for (let i = 0; i < petIds.length; i++) {
      const petSchedules = await Schedule.findAll({
        attributes: ["time"],
        where: {
          pet_id: petIds[i],
        },
      });

      petsSchedules.push(
        petSchedules.map(function (val, index) {
          return val.get("time");
        })
      );
    }

    return petsSchedules;
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
