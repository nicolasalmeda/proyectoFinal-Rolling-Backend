import { check } from "express-validator";
import resultadoValidacion from "./resultadoValiadacion.js";

const validacionHabitacion = [
  check('numero')
  .notEmpty().withMessage('El numero de habitacion es requerido')
  .isNumeric().withMessage('El numero de habitacion debe ser un numero')
  .isInt({min:1, max:1000}).withMessage('El numero de habitacion debe estar entre 1 y 1000'),
  check('tipo')
  .notEmpty().withMessage('El tipo de habitacion es requerido')
  .isString().withMessage('El tipo de habitacion debe ser un string')
  .isIn(['individual', 'doble', 'triple', 'suite']).withMessage('El tipo de habitacion debe ser individual, doble, triple o suite'),
  check('precio')
  .notEmpty().withMessage('El precio de habitacion es requerido')
  .isNumeric().withMessage('El precio de habitacion debe ser un numero')
  .isInt({min:100}).withMessage('El precio de habitacion debe ser mayor a 100'),
  check('disponibilidad')
  .notEmpty().withMessage('La disponibilidad de habitacion es requerida')
  .isString().withMessage('La disponibilidad de habitacion debe ser un string')
  .isIn(['disponible', 'no disponible']).withMessage('La disponibilidad de habitacion debe ser disponible o no disponible'),
  check('imagen')
  .notEmpty().withMessage('La imagen de habitacion es requerida')
  .isString().withMessage('La imagen de habitacion debe ser un string')
  .matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|svg))/i).withMessage('La imagen de habitacion debe ser una url de imagen valida'),
  check('descripcion')
  .notEmpty().withMessage('La descripcion de habitacion es requerida')
  .isString().withMessage('La descripcion de habitacion debe ser un string')
  .isLength({min:20, max:1000}).withMessage('La descripcion de habitacion debe tener entre 20 y 1000 caracteres'),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  }
];


export default validacionHabitacion;
