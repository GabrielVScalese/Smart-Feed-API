const { Model, DataTypes } = require("sequelize");

class ResetToken extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.STRING, primaryKey: true },
        token: DataTypes.STRING,
        expires_in: DataTypes.INTEGER,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}

module.exports = ResetToken;
