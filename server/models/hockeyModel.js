import { Sequelize } from "sequelize";
import db from "../conn.js";

const { DataTypes } = Sequelize;

export const hockey = db.define(
  "hockey",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    player1: {
      type: DataTypes.STRING,
    },
    player2: {
      type: DataTypes.STRING,
    },
    player1Score: {
      type: DataTypes.INTEGER,
    },
    player2Score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

await hockey.sync({ force: true });