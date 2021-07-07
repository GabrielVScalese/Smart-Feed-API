const { Model, DataTypes } = require("sequelize");

class VerificationToken extends Model {
  static init(sequelize) {
    super.init({ token: DataTypes.STRING }, { sequelize });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = VerificationToken;
