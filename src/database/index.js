const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Pet = require("../models/Pet");
const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Pet.init(sequelize);
Pet.associate(sequelize.models);

module.exports = sequelize;
