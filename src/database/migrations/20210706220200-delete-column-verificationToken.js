"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("verification_tokens", "expires_in");
  },

  down: async (queryInterface, Sequelize) => {},
};
