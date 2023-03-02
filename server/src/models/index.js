const {Sequelize, DataTypes} = require('sequelize');
const userModel = require('./User')
const menuModel = require('./Menu')
const employeeModel = require('./Employee')
const sequelize = new Sequelize('vue-ts-admin', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
const User = userModel(sequelize, DataTypes)
const Menu = menuModel(sequelize, DataTypes)
const Employee = employeeModel(sequelize, DataTypes)

module.exports={
  User,
  Menu,
  Employee
}
