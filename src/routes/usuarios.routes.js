import { Router } from "express";
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario, loginUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route("/usuarios").get(getUsuarios).post(createUsuario);
router.route("/usuarios/:id").get(getUsuario).put(updateUsuario).delete(deleteUsuario);
router.route("/login").post(loginUsuario);

export default router;