import Habitacion from "../database/models/habitaciones.js";

export const getHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json(habitaciones);
  }catch(error){
    res.status(404).json({message: error.message});
    console.log(error.message);
  }
}

export const getHabitacion = async (req, res) => {
  const {id} = req.params;
  try {
    const habitacion = await Habitacion.findById(id);
    res.status(200).json(habitacion);
  }catch(error){
    res.status(404).json({message: error.message});
  }
}

export const createHabitacion = async (req, res) => {
  const habitacion = req.body;
  const newHabitacion = new Habitacion(habitacion);
  try {
    await newHabitacion.save();
    res.status(201).json(newHabitacion);
  }catch(error){
    res.status(409).json({message: error.message});
    console.log(error.message);
  }
}

export const updateHabitacion = async (req, res) => {
  const {id} = req.params;
  const habitacion = req.body;
  try {
    const habitacionBuscada = await Habitacion.findById(id)
    if(!habitacionBuscada) return res.status(404).json({message: "Habitacion no encontrada"});
    await Habitacion.findByIdAndUpdate(id, habitacion, habitacion);
    res.status(200).json({message: "Habitacion actualizada"});
  }catch(error){
    res.status(500).json({message: error.message});
  }
}

export const deleteHabitacion = async (req, res) => {
  const {id} = req.params;
  try {
    const habitacionBuscada = await Habitacion.findById(id)
    if(!habitacionBuscada) return res.status(404).json({message: "Habitacion no encontrada"});
    await Habitacion.findByIdAndDelete(id);
    res.status(200).json({message: "Habitacion eliminada"});
  }catch(error){
    res.status(500).json({message: error.message});
    console.log(error.message);
  }
}

