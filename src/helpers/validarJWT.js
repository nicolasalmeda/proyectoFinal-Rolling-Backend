import jwt from 'jsonwebtoken';

const validarAdminJWT = (req, res, next) => {
  const token = req.header('x-token');
  console.log(token)
  if (!token) return res.status(401).json({ message: "no hay token" });
  try {
    const { rol } = jwt.verify(token, 'secreto');
    if (!rol) return res.status(401).json({ message: "No es un administrador" });
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error.message);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        mensaje: "Token inválido",
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        mensaje: "Token expirado",
      });
    } else {
      return res.status(401).json({
        mensaje: "Error en la autenticación",
      });
    }
  }
};

export default validarAdminJWT;