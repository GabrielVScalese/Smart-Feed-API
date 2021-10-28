const { Model, DataTypes } = require("sequelize");

class ActivationId extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.STRING, primaryKey: true },
        expires_in: { type: DataTypes.INTEGER },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = ActivationId;
