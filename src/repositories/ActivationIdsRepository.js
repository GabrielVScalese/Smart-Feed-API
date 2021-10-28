const ActivationId = require("../models/ActivationId");

class ActivationIdsRepository {
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
