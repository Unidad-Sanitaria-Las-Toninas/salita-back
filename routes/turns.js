import { Router } from "express";
import { getTurns,getTurn, createTurn, updateTurn, deleteTurn } from "../controllers/turns.controller.js";
const router = Router();

router.get("/turns", getTurns)
router.get("/turn/:dni", getTurn)
router.post("/turn", createTurn)
router.patch("/turn/:id",updateTurn)
router.delete("/turn/:id",deleteTurn)

export default router;