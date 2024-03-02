import { Router } from "express";
import { getTurns, createTurn, updateTurn, deleteTurn } from "../controllers/turns.controller.js";
const router = Router();

router.get("/turns", getTurns)
router.post("/turn", createTurn)
router.patch("/turn/:id",updateTurn)
router.delete("/turn/:id",deleteTurn)

export default router;