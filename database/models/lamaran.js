module.exports = (sequelize, DataTypes) => {
  const Lamaran = sequelize.define('Lamaran', {
    status: DataTypes.STRING,
    pelamarId: DataTypes.INTEGER,
    lowonganId: DataTypes.INTEGER
  }, {});
  Lamaran.associate = function(models) {
    // associations can be defined here
    Lamaran.belongsTo(models.Lowongan, {
      foreignKey: "lowonganId",
      as: "lowongan"
    });

    Lamaran.belongsTo(models.Pelamar, {
      foreignKey: "pelamarId",
      as: "pelamar"
    })
  };
  return Lamaran;
};