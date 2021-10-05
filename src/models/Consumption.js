const { Model, DataTypes } = require("sequelize");

class Consumption extends Model {
  static init(sequelize) {
    super.init(
      {
        quantity: DataTypes.STRING,
        date: DataTypes.DATE,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pet, { foreignKey: "pet_id", as: "pet" });
  }
}

module.exports = Consumption;
