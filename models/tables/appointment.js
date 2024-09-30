import { pool } from '../../pool.js';

class Appointment {
  static async create({ id, user_id, timeslot_id, is_confirmed }) {
    const query = `
      INSERT INTO appointments (id, user_id, timeslot_id, is_confirmed)
      VALUES ($1, $2, $3, $4)
      RETURNING id, user_id, timeslot_id, is_confirmed;
    `;
    const values = [id, user_id, timeslot_id, is_confirmed];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findById(id) {
    const query = 'SELECT * FROM appointments WHERE id = $1';
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findAll() {
    const query = 'SELECT * FROM appointments';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async select(columns = 'id, user_id, timeslot_id, is_confirmed') {
    const query = `SELECT ${columns} FROM appointments;`;
    const { rows } = await pool.query(query);
    return rows;
  }

  static async update(id, updatedValues) {
    const entries = Object.entries(updatedValues);
    const query = `UPDATE appointments SET ${entries
      .map(([column], index) => `${column} = $${index + 1}`)
      .join(', ')} WHERE id = $${entries.length + 1} RETURNING *`;
    const values = [...entries.map(([, value]) => value), id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Appointment;
