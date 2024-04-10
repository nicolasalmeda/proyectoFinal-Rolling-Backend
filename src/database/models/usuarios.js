import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  rol: {
    type: Boolean,
    default: false
  },
  fecha_nacimiento: {
    type: String,
    required: true
  }
});

usuarioSchema.pre('save', async function (next) {
  const usuario = this;
  if (!usuario.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(usuario.password, salt);
  usuario.password = hash;
  next();
});

usuarioSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Usuario = mongoose.model('usuarios', usuarioSchema);
export default Usuario;