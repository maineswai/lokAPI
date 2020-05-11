'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perusahaan = sequelize.define('Perusahaan', {
    nama: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Perusahaan.associate = function(models) {
    // associations can be defined here
    Perusahaan.hasMany(models.Lowongan, {
      foreignKey: "perusahaanId",
      as: "lowongans",
      onDelete: "CASCADE"
    });
  };
  return Perusahaan;
};