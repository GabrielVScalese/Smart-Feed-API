const ActivationId = require("../models/ActivationId");

class ActivationIdsRepository {
  async findById(id) {
    const activationId = await ActivationId.findOne({
      where: {
        id,
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
