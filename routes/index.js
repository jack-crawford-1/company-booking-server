import express from 'express';
import {
  indexPage,
  getAppointments,
  getTimeslots,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  createTimeslot,
  updateTimeslot,
  deleteTimeslot,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from '../controllers/index.js';

const router = express.Router();

// Index
router.get('/', indexPage);

// User
router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Timeslot
router.get('/timeslots', getTimeslots);
router.post('/timeslots', createTimeslot);
router.put('/timeslots/:id', updateTimeslot);
router.delete('/timeslots/:id', deleteTimeslot);

// Appointment
router.get('/appointments', getAppointments);
router.post('/appointments', createAppointment);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);

export default router;
