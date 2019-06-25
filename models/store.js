'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
    Store.hasMany(models.Game)
  };
  return Store;
};
