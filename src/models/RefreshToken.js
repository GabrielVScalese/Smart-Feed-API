const { Model, DataTypes } = require("sequelize");

class RefreshToken extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.STRING, primaryKey: true },
        expires_in: DataTypes.INTEGER,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = RefreshToken;
