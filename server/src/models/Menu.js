module.exports = (sequelize, DataTypes) => {
  return sequelize.define("menu", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    redirect: DataTypes.STRING,
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    pid: DataTypes.BIGINT
  }, {
    freezeTableName: true,
    timestamps: false
  })
}