import {Router} from 'express'
import { getReservas, getReserva, createReserva, updateReserva, deleteReserva, getReservasByIdHabitacion } from '../controllers/reservas.controllers.js'
import validacionReserva from '../helpers/validacionReservas.js';
import validarAdminJWT from '../helpers/validarJWT.js';

const router = Router();

router.route("/reservas").get(getReservas).post([validarAdminJWT,validacionReserva],createReserva);
router.route("/reservas/:id").get(getReserva).put([validarAdminJWT,validacionReserva],updateReserva).delete([validarAdminJWT],deleteReserva);
router.route("/reservas/habitacion/:id").get(getReservasByIdHabitacion);

export default router;