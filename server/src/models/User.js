module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.INET
  }, {
    freezeTableName: true
  })
}