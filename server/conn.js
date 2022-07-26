import { Sequelize } from "sequelize";

const db = new Sequelize("milan", "root", "Tsunami123!", {
  host: "localhost",
  dialect: "mysql",
});

export default db;