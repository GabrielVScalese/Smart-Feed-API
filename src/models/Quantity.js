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
      onDelete: "cascade",
      foreignKey: "pet_id",
      allowNull: false,
    });
  }
}

module.exports = Quantity;
