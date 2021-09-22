const { Model, DataTypes } = require("sequelize");

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        time: DataTypes.TIME,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pet, {
      foreignKey: "pet_id",
      as: "pet",
      onDelete: "CASCADE",
    });
  }
}

module.exports = Schedule;
