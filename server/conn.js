import { Sequelize } from "sequelize";

const db = new Sequelize("<db name>", "<db user name>", "<password for the user>", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
