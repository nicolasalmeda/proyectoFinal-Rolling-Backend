import { Router } from "express";
import { getHabitaciones, getHabitacion, createHabitacion, updateHabitacion,deleteHabitacion } from "../controllers/habitaciones.controllers.js";
import validacionHabitacion from "../helpers/validacionHabitacion.js";
import validarAdminJWT from "../helpers/validarJWT.js";

const router = Router();

router.route("/habitaciones").get(getHabitaciones).post([validarAdminJWT,validacionHabitacion],createHabitacion);
router.route("/habitaciones/:id").get(getHabitacion).put([validarAdminJWT,validacionHabitacion],updateHabitacion).delete([validarAdminJWT],deleteHabitacion);

export default router;