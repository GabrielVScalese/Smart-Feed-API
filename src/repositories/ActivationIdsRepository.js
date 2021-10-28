const ActivationId = require("../models/ActivationId");

class ActivationIdsRepository {
  async findById(id) {
    const activationId = await ActivationId.findOne({
      where: {
        id,
      },
    });

    if (!activationId) throw new Error("Nonexistent activation id");

    return activationId;
  }

  async findByUserId(userId) {
    const activationId = await ActivationId.findOne({
      where: {
        user_id: userId,
      },
    });

    return activationId;
  }

  async save(activationId) {
    const newActivationId = await ActivationId.create(activationId);

    return newActivationId;
  }

  async destroyByUserId(userId) {
    await ActivationId.destroy({
      where: {
        user_id: userId,
      },
    });
  }
}

module.exports = ActivationIdsRepository;
