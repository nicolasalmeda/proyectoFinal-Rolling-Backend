import { Router } from "express";
import { getHabitaciones, getHabitacion, createHabitacion, updateHabitacion,deleteHabitacion } from "../controllers/habitaciones.controllers.js";
import validacionHabitacion from "../helpers/validacionHabitacion.js";

const router = Router();

router.route("/habitaciones").get(getHabitaciones).post([validacionHabitacion],createHabitacion);
router.route("/habitaciones/:id").get(getHabitacion).put([validacionHabitacion],updateHabitacion).delete(deleteHabitacion);

export default router;