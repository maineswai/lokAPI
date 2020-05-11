'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lowongan = sequelize.define('Lowongan', {
    posisi: DataTypes.STRING,
    syarat: DataTypes.TEXT,
    cabang: DataTypes.STRING,
    gaji: DataTypes.STRING,
    kategori: DataTypes.STRING,
    perusahaanId: DataTypes.INTEGER
  }, {});
  Lowongan.associate = function(models) {
    // associations can be defined here
    Lowongan.hasMany(models.Lamaran, {
      foreignKey: "lowonganId",
      as: "lowongans",
      onDelete: "CASCADE"
    });

    Lowongan.belongsTo(models.Perusahaan, {
      foreignKey: "perusahaanId",
      as: "perusahaans"
    });
  };
  return Lowongan;
};