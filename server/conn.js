import { Sequelize } from "sequelize";

// MySQL has to be installed and running for this to work.
// A database with `${dbName}` has to be manually made. Tables are made automatically.

const userName = "<user name>";
const password = "<password>";
const dbName = "<database name>";

const db = new Sequelize(`${dbName}`, `${userName}`, `${password}`, {
  host: "localhost",
  dialect: "mysql",
});

export default db;
