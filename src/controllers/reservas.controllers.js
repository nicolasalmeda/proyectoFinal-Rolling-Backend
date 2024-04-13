import Reserva from "../database/models/reservas.js";

export const getReservas = async (req,res) => {
  try{
    const reservas = await Reserva.find();
    res.status(200).json(reservas);
  }catch(error){
    res.status(404).json({message: error.message});
    console.log(error.message);
  }
}

export const getReserva = async (req,res) => {
  const {id} = req.params;
  try{
    const reserva = await Reserva.findById(id);
    res.status(200).json(reserva);
  }catch(error){
    res.status(404).json({message: error.message});
  }
}

export const createReserva = async (req,res) => {
  const reserva = req.body;
  const newReserva = new Reserva(reserva);
  try{
    await newReserva.save();
    res.status(201).json(newReserva);
  }catch(error){
    res.status(409).json({message: error.message});
    console.log(error.message);
  }
}

export const updateReserva = async (req,res) => {
  const {id} = req.params;
  const reserva = req.body;
  try{
    const reservaBuscada = await Reserva.findById(id);
    if(!reservaBuscada) return res.status(404).json({message: "Reserva no encontrada"});
    await Reserva.findByIdAndUpdate(id,reserva,reserva);
    res.status(200).json({message: "Reserva actualizada"});
  }catch(error){
    res.status(500).json({message: error.message});
  }
}

export const deleteReserva = async (req,res) => {
  const {id} = req.params;
  try{
    const reservaBuscada = await Reserva.findById(id);
    if(!reservaBuscada) return res.status(404).json({message: "Reserva no encontrada"});
    await Reserva.findByIdAndDelete(id);
    res.status(200).json({message: "Reserva eliminada"});
  } catch(error){
    res.status(500).json({message: error.message});
    console.log(error.message);
  }
}

export const getReservasByIdHabitacion = async (req,res) => {
  const idHabitacion = req.params.id;
  try{
    const reservas = await Reserva.find({habitacion: idHabitacion});
    let fechasReservadas = [];

    reservas.forEach(reserva => {
      const [diaEntrada, mesEntrada, añoEntrada] = reserva.fecha_entrada.split('/');
      const [diaSalida, mesSalida, añoSalida] = reserva.fecha_salida.split('/');

      const fechaEntrada = new Date(`${mesEntrada}/${diaEntrada}/${añoEntrada}`);
      const fechaSalida = new Date(`${mesSalida}/${diaSalida}/${añoSalida}`);
      

      let fechaActual = new Date(fechaEntrada);
      while (fechaActual <= fechaSalida) {
        const dia = fechaActual.getDate().toString().padStart(2, '0');
        const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
        const año = fechaActual.getFullYear();
        const formattedDate = `${dia}/${mes}/${año}`;
        fechasReservadas.push(formattedDate);
        fechaActual.setDate(fechaActual.getDate() + 1);
      }
    });

    let fechasUnicas = new Set(fechasReservadas);
    fechasUnicas = Array.from(fechasUnicas);
    res.status(200).json(fechasUnicas);
  } catch(error){
    res.status(404).json({message: error.message});
    console.log(error.message);
  }
}