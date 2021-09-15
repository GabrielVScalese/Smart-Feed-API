const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Pet = require("../models/Pet");
const Quantity = require("../models/Quantity.js");
const Schedule = require("../models/Schedule.js");
const RefreshToken = require("../models/RefreshToken");

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);

Pet.init(sequelize);
Pet.associate(sequelize.models);

Quantity.init(sequelize);
Quantity.associate(sequelize.models);

Schedule.init(sequelize);
Schedule.associate(sequelize.models);

RefreshToken.init(sequelize);
RefreshToken.associate(sequelize.models);

module.exports = sequelize;
