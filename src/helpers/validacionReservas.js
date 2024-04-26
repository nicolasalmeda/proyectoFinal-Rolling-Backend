import { check } from "express-validator";
import resultadoValidacion from "./resultadoValiadacion.js";

const validacionReserva = [
  check('numero_reserva')
  .notEmpty().withMessage('El nombre es requerido')
  .isString().withMessage('El numero de reserva debe ser un string'),
  check('fecha_entrada')
  .notEmpty().withMessage('La fecha de ingreso es requerida')
  .isString().withMessage('La fecha de ingreso debe ser un string')
  .matches(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/).withMessage('La fecha de ingreso debe ser una fecha valida'),
  check('fecha_salida')
  .notEmpty().withMessage('La fecha de salida es requerida')
  .isString().withMessage('La fecha de salida debe ser un string')
  .matches(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/).withMessage('La fecha de salida debe ser una fecha valida'),
  check('usuario')
  .notEmpty().withMessage('El id de habitacion es requerido')
  .isString().withMessage('El id de habitacion debe ser un string'),
  check('habitacion')
  .notEmpty().withMessage('El id de habitacion es requerido')
  .isString().withMessage('El id de habitacion debe ser un string'),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  }
];

export default validacionReserva;