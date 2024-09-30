import { pool } from '../../pool.js';
import {
  createUsersTable,
  insertUsers,
  dropUsersTable,
  createTimeslotsTable,
  insertTimeslots,
  dropTimeslotsTable,
  createAppointmentsTable,
  insertAppointments,
  dropAppointmentsTable,
} from '../seed/queries.js';

export const executeQueryArray = async (arr) => {
  const stop = arr.length;
  for (let index = 0; index < stop; index++) {
    await pool.query(arr[index]);
  }
};

export const dropTables = () =>
  executeQueryArray([
    dropUsersTable,
    dropTimeslotsTable,
    dropAppointmentsTable,
  ]);

export const createTables = () =>
  executeQueryArray([
    createUsersTable,
    createTimeslotsTable,
    createAppointmentsTable,
  ]);

export const insertIntoTables = () =>
  executeQueryArray([insertUsers, insertTimeslots, insertAppointments]);
