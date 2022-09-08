import express from "express";
import {
  getScore as getTScore,
  putScore as putTScore,
} from "../controllers/tennis.js";
import {
  getScore as getCScore,
  putScore as putCScore,
} from "../controllers/cricket.js";
import {
  getScore as getFScore,
  putScore as putFScore,
} from "../controllers/football.js";
import {
  getScore as getTTScore,
  putScore as putTTScore,
} from "../controllers/tableTennis.js";
import {
  getScore as getBScore,
  putScore as putBScore,
} from "../controllers/badmintion.js";
import {
  getScore as getVBScore,
  putScore as putVBScore,
} from "../controllers/volleyball.js";
import {
  getScore as getHScore,
  putScore as putHScore,
} from "../controllers/hockey.js";

const router = express.Router();

router.get("/football", getFScore);
router.get("/tennis", getTScore);
router.get("/cricket", getCScore);
router.get("/tableTennis", getTTScore);
router.get("/badmintion", getBScore);
router.get("/volleyball", getVBScore);
router.get("/hockey", getHScore);

router.post("/football", putFScore);
router.post("/tennis", putTScore);
router.post("/cricket", putCScore);
router.post("/tableTennis", putTTScore);
router.post("/badmintion", putBScore);
router.post("/volleyball", putVBScore);
router.post("/hockey", putHScore);


export default router;
