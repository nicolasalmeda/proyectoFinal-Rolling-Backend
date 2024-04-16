import Usuario from "../database/models/usuarios.js";
import jwt from 'jsonwebtoken';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error.message);
  }
};

export const getUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findById(id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUsuario = async (req, res) => {
  const usuario = req.body;
  const newUsuario = new Usuario(usuario);
  try {
    await newUsuario.save();
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log(error.message);
  }
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = req.body;
  try {
    const usuarioBuscado = await Usuario.findById(id);
    if (!usuarioBuscado) return res.status(404).json({ message: "Usuario no encontrado" });
    await Usuario.findByIdAndUpdate(id, usuario);
    res.status(200).json({ message: "Usuario actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioBuscado = await Usuario.findById(id);
    if (!usuarioBuscado) return res.status(404).json({ message: "Usuario no encontrado" });
    await Usuario.findByIdAndDelete(id);
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const usuario = await Usuario.findOne({ email }).select('+password');
  
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      const passwordValida = await usuario.comparePassword(password);
  
      if (!passwordValida) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
  
    const token = jwt.sign({ id: usuario._id, rol:usuario.rol }, 'secreto', { expiresIn: '1h' });

    res.status(200).json({ id: usuario._id, rol:usuario.rol, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

