const SchedulesRepository = require("../../../repositories/SchedulesRepository");

class CreateScheduleCase {
  async execute(data) {
    const schedulesRepository = new SchedulesRepository();

    const schedulesByPet = await schedulesRepository.findByPetId(
      data["pet_id"]
    );

    if (schedulesByPet.length == 4)
      throw new Error("Pet already has four schedules");

    const newSchedule = await schedulesRepository.save(data);

    return newSchedule;
  }
}

module.exports = CreateScheduleCase;
