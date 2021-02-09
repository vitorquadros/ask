const Sequelize = require("sequelize");

const connection = new Sequelize("ask_db", "root", "8642", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
