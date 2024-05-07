import { Router } from "express";
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario, loginUsuario } from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";
import validarAdminJWT from "../helpers/validarJWT.js";

const router = Router();

router.route("/usuarios").get(getUsuarios).post([validacionUsuario],createUsuario);
router.route("/usuarios/:id").get(getUsuario).put([validarAdminJWT,validacionUsuario],updateUsuario).delete([validarAdminJWT],deleteUsuario);
router.route("/login").post(loginUsuario);

export default router;