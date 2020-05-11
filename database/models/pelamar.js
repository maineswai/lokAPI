'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pelamar = sequelize.define('Pelamar', {
    nama: DataTypes.STRING,
    kelamin: DataTypes.STRING,
    telp: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.TEXT
  }, {});
  Pelamar.associate = function(models) {
    // associations can be defined here
    Pelamar.hasMany(models.Lamaran, {
      foreignKey: "pelamarId",
      as: "lamarans",
      onDelete: "CASCADE"
    });
  };
  return Pelamar;
};