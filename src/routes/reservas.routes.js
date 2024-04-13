import {Router} from 'express'
import { getReservas, getReserva, createReserva, updateReserva, deleteReserva, getReservasByIdHabitacion } from '../controllers/reservas.controllers.js'

const router = Router();

router.route("/reservas").get(getReservas).post(createReserva);
router.route("/reservas/:id").get(getReserva).put(updateReserva).delete(deleteReserva);
router.route("/reservas/habitacion/:id").get(getReservasByIdHabitacion);

export default router;