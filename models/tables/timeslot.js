import { pool } from '../../pool.js';
import dotenv from 'dotenv';

dotenv.config();

class Timeslot {
  static async create({
    start_date,
    start_time,
    end_date,
    end_time,
    is_booked,
  }) {
    const query = `
      INSERT INTO timeslots (start_date, start_time, end_date, end_time, is_booked)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, start_date, start_time, end_date, end_time, is_booked;
    `;
    const values = [start_date, start_time, end_date, end_time, is_booked];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findById(id) {
    const query = 'SELECT * FROM timeslots WHERE id = $1';
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findAll() {
    const query = 'SELECT * FROM timeslots';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async select(
    columns = 'id, start_date, start_time, end_date, end_time, is_booked'
  ) {
    const query = `SELECT ${columns} FROM timeslots;`;
    const { rows } = await pool.query(query);
    return rows;
  }

  static async update(id, updatedValues) {
    const entries = Object.entries(updatedValues);
    const query = `UPDATE timeslots SET ${entries
      .map(([column], index) => `${column} = $${index + 1}`)
      .join(', ')} WHERE id = $${entries.length + 1} RETURNING *`;
    const values = [...entries.map(([, value]) => value), id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Timeslot;
