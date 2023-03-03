module.exports = (sequelize, DataTypes) => {
  return sequelize.define("employee", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    date:DataTypes.DATE
  }, {
    freezeTableName: true,
    timestamps:false
  })
}