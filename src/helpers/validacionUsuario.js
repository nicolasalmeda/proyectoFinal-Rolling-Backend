import { check } from "express-validator";
import resultadoValidacion from "./resultadoValiadacion.js";

const validacionUsuario = [
  check("email")
  .notEmpty().withMessage("El email es requerido")
  .isEmail().withMessage("El email no es valido"),
  check("nombre")
  .notEmpty().withMessage("El nombre es requerido")
  .isString().withMessage("El nombre debe ser un string")
  .isLength({ min: 2, max: 40 }).withMessage("El nombre debe tener entre 2 y 40 caracteres"),
  check("apellido")
  .notEmpty().withMessage("El apellido es requerido")
  .isString().withMessage("El apellido debe ser un string")
  .isLength({ min: 2, max: 40 }).withMessage("El apellido debe tener entre 2 y 40 caracteres"),
  check("fecha_nacimiento")
  .notEmpty().withMessage("La fecha de nacimiento es requerida")
  .isString().withMessage("La fecha de nacimiento debe ser un string")
  .matches(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/).withMessage("La fecha de nacimiento debe ser una fecha valida"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  }
];

export default validacionUsuario;