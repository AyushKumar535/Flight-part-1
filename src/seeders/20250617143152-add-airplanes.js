'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // npx sequelize db:seed:all ->  Update the column
    
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus380',
        capacity: 600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'boeing777',
        capacity: 350,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },


  // npx sequelize db:seed:undo:all ->  delete the column 
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Airplanes', 
      {
        [Op.or]:[
          {modelNumber: 'airbus380'}, 
          {modelNumber: 'boeing777'}
        ]
      })
  }
};
