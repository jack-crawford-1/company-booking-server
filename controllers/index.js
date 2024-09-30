import Appointment from '../models/tables/appointment.js';
import Timeslot from '../models/tables/timeslot.js';
import User from '../models/tables/user.js';

export const indexPage = (req, res) => {
  res.status(200).json({ message: 'API up and running' });
};

// --- USERS ---

// Get all users
export const getUsers = async (req, res) => {
  try {
    const data = await User.select('id, name, email');
    res.status(200).json({ users: data });
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.create({ name, email });
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedValues = req.body;
  try {
    const user = await User.update(id, updatedValues);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.delete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- TIMESLOTS ---

// Get all timeslots
export const getTimeslots = async (req, res) => {
  try {
    const data = await Timeslot.select(
      'id, start_date, start_time, end_date, end_time, is_booked'
    );
    res.status(200).json({ timeslots: data });
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

// Create a new timeslot
export const createTimeslot = async (req, res) => {
  const { start_date, start_time, end_date, end_time, is_booked } = req.body;
  try {
    const timeslot = await Timeslot.create({
      start_date,
      start_time,
      end_date,
      end_time,
      is_booked,
    });
    res.status(201).json({ timeslot });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a timeslot by ID
export const updateTimeslot = async (req, res) => {
  const { id } = req.params;
  const updatedValues = req.body;
  try {
    const timeslot = await Timeslot.update(id, updatedValues);
    res.status(200).json({ timeslot });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a timeslot by ID
export const deleteTimeslot = async (req, res) => {
  const { id } = req.params;
  try {
    await Timeslot.delete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- APPOINTMENTS ---

// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const data = await Appointment.select(
      'id, user_id, timeslot_id, is_confirmed'
    );
    res.status(200).json({ appointments: data });
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

// Create a new appointment
export const createAppointment = async (req, res) => {
  const { id, user_id, timeslot_id, is_confirmed } = req.body;
  try {
    const appointment = await Appointment.create({
      id,
      user_id,
      timeslot_id,
      is_confirmed,
    });
    res.status(201).json({ appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an appointment by ID
export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const updatedValues = req.body;
  try {
    const appointment = await Appointment.update(id, updatedValues);
    res.status(200).json({ appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an appointment by ID
export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.delete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
