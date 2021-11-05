const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User.js");
const Pet = require("../models/Pet.js");
const Mode = require("../models/Mode.js");
const Quantity = require("../models/Quantity.js");
const Schedule = require("../models/Schedule.js");
const Consumption = require("../models/Consumption");
const RefreshToken = require("../models/RefreshToken");
const ResetToken = require("../models/ResetToken");
const ActivationId = require("../models/ActivationId");

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);

Pet.init(sequelize);
User.associate(sequelize.models);
Pet.associate(sequelize.models);

Mode.init(sequelize);
Mode.associate(sequelize.models);

Quantity.init(sequelize);
Quantity.associate(sequelize.models);

Schedule.init(sequelize);
Schedule.associate(sequelize.models);

RefreshToken.init(sequelize);
RefreshToken.associate(sequelize.models);

Consumption.init(sequelize);
Consumption.associate(sequelize.models);

ResetToken.init(sequelize);
ResetToken.associate(sequelize.models);

ActivationId.init(sequelize);
ActivationId.associate(sequelize.models);

module.exports = sequelize;
