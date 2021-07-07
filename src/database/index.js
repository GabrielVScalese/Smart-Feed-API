const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Pet = require("../models/Pet");
const VerificationToken = require("../models/Pet");
const sequelize = new Sequelize(dbConfig);

User.init(sequelize);

Pet.init(sequelize);
Pet.associate(sequelize.models);

VerificationToken.init(sequelize);
VerificationToken.associate(sequelize.models);

module.exports = sequelize;
