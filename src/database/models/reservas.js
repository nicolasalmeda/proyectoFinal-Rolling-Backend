import mongoose, { Schema } from 'mongoose';

const reservaSchema = new Schema({
  numero_reserva: {
    type: String,
    required: true,
    unique: true
  },
  fecha_entrada: {
    type: String,
    required: true
  },
  fecha_salida: {
    type: String,
    required: true
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
