import {Router} from 'express'
import { getReservas, getReserva, createReserva, updateReserva, deleteReserva, getReservasByIdHabitacion } from '../controllers/reservas.controllers.js'
import validacionReserva from '../helpers/validacionReservas.js';

const router = Router();

router.route("/reservas").get(getReservas).post([validacionReserva],createReserva);
router.route("/reservas/:id").get(getReserva).put([validacionReserva],updateReserva).delete(deleteReserva);
router.route("/reservas/habitacion/:id").get(getReservasByIdHabitacion);

export default router;