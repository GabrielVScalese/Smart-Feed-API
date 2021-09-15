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
    try {
      this.belongsTo(models.Pet, { foreignKey: "pet_id", as: "pet" });
    } catch (err) {
      console.log("dsad");
    }
  }
}

module.exports = Quantity;
