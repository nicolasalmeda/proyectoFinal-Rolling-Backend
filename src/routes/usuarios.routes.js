import { Router } from "express";
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario, loginUsuario } from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const router = Router();

router.route("/usuarios").get(getUsuarios).post([validacionUsuario],createUsuario);
router.route("/usuarios/:id").get(getUsuario).put([validacionUsuario],updateUsuario).delete(deleteUsuario);
router.route("/login").post(loginUsuario);

export default router;