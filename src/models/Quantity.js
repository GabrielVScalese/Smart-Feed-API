const { Model, DataTypes } = require("sequelize");

class Quantity extends Model {
  static init(sequelize) {
    super.init(
      {
        quantity: DataTypes.INTEGER,
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

module.exports = Quantity;
