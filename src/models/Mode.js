const { Model, DataTypes } = require("sequelize");

class Mode extends Model {
  static init(sequelize) {
    super.init(
      {
        mode: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pet, {
      foreignKey: "pet_id",
      as: "pet",
    });
  }
}

module.exports = Mode;
