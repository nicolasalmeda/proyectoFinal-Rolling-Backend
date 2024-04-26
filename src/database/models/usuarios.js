import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
        validator: (value) =>{
          const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          return pattern.test(value);
        },
        message: props => `${props.value} no es un email valido.`,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 40
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 40
  },
  rol: {
    type: Boolean,
    default: false
  },
  fecha_nacimiento: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/.test(value);
      },
      message: props => `${props.value} no es una fecha valida.`
    }
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