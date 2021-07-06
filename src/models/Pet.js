const { Model, DataTypes } = require("sequelize");

class Pet extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        animal: DataTypes.STRING,
        ration: DataTypes.STRING,
        size: DataTypes.STRING,
        device: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Pet;
