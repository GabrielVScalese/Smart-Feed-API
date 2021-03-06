const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        verified: DataTypes.BOOLEAN,
        image: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Pet, {
      foreignKey: "user_id",
      as: "pets",
      hooks: true,
      onDelete: "cascade",
    });
  }
}

module.exports = User;
