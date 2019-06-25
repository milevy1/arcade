'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    StoreId: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    Game.belongsTo(models.Store)
  };
  return Game;
};
