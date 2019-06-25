module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Stores', [
      {
        name: 'Coreys Googley Games',
        phoneNumber: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Matts Awesome Arcade',
        phoneNumber: 5678,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    const stores = await queryInterface.sequelize.query(
      `SELECT id from "Stores";`
    );

    await queryInterface.bulkInsert('Games', [{
      title: 'Fix it Felix Jr.',
      price: 50,
      releaseYear: 1982,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      StoreId: stores[0][0].id
    },
    {
      title: 'Ms. Pac Man',
      price: 100,
      releaseYear: 1981,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      StoreId: stores[0][0].id
    },
    {
      title: 'Dig Dug',
      price: 75,
      releaseYear: 1982,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      StoreId: stores[0][1].id
    },
    {
      title: 'Galaga',
      price: 125,
      releaseYear: 1981,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      StoreId: stores[0][1].id
    }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Games', null, {});
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
