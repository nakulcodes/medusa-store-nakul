const { DataSource } = require("typeorm");
const { config } = require("./medusa-config");

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "root",
  password: "password",
  database: "medusa-db-s1i7t",
  entities: ["dist/models/*.js"],
  migrations: ["dist/migrations/*.js"],
});

module.exports = {
  datasource: AppDataSource,
};
