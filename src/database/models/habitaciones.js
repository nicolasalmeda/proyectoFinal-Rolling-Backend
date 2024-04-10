import mongoose, {Schema} from 'mongoose';

const habitacionesSchema = new Schema({
  numero: {
    type: Number, 
    required: true,
    min:1,
    max:1000,
    unique: true
  },
  tipo: {
    type: String,
    required: true,
    enum: ['individual', 'doble', 'triple', 'suite']
  },
  precio: {
    type: Number,
    required: true,
    min: 100
  },
  disponibilidad: {
    type: String,
    required: true,
    enum: ['disponible', 'no disponible']
  },
  imagen:{
    type:String,
    required:true,
    validate:{
        validator: function(valor){
            return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(valor)
        },
        message: props => `${props.value} no es una url de imagen valida.`
    }
  },
  descripcion:{
    type:String,
    required:true,
    minLength: 20,
    maxLength: 1000,
  }
});

const Habitacion = mongoose.model('habitacion', habitacionesSchema);
export default Habitacion;