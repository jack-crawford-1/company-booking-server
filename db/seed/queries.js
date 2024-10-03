// users Table
export const createUsersTable = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR
);
`;

export const insertUsers = `
INSERT INTO users(name, email)
VALUES 
  ('Alice', 'aaa@gmail.com'),
  ('Bob', 'bbb@gmail.com'),
  ('Charlie', 'ccc@gmail.com');
`;

export const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE;';

// timeslots Table
export const createTimeslotsTable = `
DROP TABLE IF EXISTS timeslots CASCADE;
CREATE TABLE IF NOT EXISTS timeslots (
  id SERIAL PRIMARY KEY,
  start_date DATE,
  start_time TIME,
  end_date DATE,
  end_time TIME,
  is_booked BOOLEAN
);
`;

export const insertTimeslots = `
INSERT INTO timeslots(start_date, start_time, end_date, end_time, is_booked)
VALUES 
  ('2024-10-09', '10:00', '2024-10-09', '11:00', true),
  ('2024-10-09', '11:00', '2024-10-09', '12:00', true),
  ('2024-10-09', '14:00', '2024-10-09', '15:00', true),
  ('2024-10-10', '10:00', '2024-10-10', '11:00', false),
  ('2024-10-10', '11:00', '2024-10-10', '12:00', false),
  ('2024-10-10', '14:00', '2024-10-10', '15:00', false);
`;

export const dropTimeslotsTable = 'DROP TABLE IF EXISTS timeslots CASCADE;';

// appointments Table
export const createAppointmentsTable = `
DROP TABLE IF EXISTS appointments CASCADE;
CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  timeslot_id INTEGER REFERENCES timeslots(id),
  is_confirmed BOOLEAN
);
`;

export const insertAppointments = `
INSERT INTO appointments(user_id, timeslot_id, is_confirmed)
VALUES 
  (1, 1, true),
  (2, 2, true),
  (3, 3, true);
`;

export const dropAppointmentsTable =
  'DROP TABLE IF EXISTS appointments CASCADE;';
