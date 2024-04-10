import { Router } from "express";
import { getHabitaciones, getHabitacion, createHabitacion, updateHabitacion,deleteHabitacion } from "../controllers/habitaciones.controllers.js";

const router = Router();

router.route("/habitaciones").get(getHabitaciones).post(createHabitacion);
router.route("/habitaciones/:id").get(getHabitacion).put(updateHabitacion).delete(deleteHabitacion);

export default router;