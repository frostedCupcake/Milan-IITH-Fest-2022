import { Sequelize, where } from "sequelize";
import { badminton } from "../models/badmintonModel.js";
import { authenticte } from "./auth.js";

export const getScore = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      let score = await badminton.findAll();
      res.status(200).json(score[0]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putScore = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      await badminton.create(req.body);
      res.json({ message: "Score Noted" }).status(201);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
