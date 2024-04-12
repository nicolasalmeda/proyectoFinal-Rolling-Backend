import mongoose, { Schema } from 'mongoose';

const reservaSchema = new Schema({
  numero_reserva: {
    type: String,
    required: true,
    unique: true
  },
  fecha_entrada: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/.test(value);
      },
      message: props => `${props.value} no es una fecha valida.`
    }
  },
  fecha_salida: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/.test(value);
      },
      message: props => `${props.value} no es una fecha valida.`
    }
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
    required: true
  },
  habitacion: {
    type: Schema.Types.ObjectId,
    ref: 'habitacion',
    required: true
  }
});

const Reserva = mongoose.model('reserva', reservaSchema);
export default Reserva;


