import { pool } from '../../pool.js';
import dotenv from 'dotenv';

dotenv.config();

class User {
  static async create({ name, email }) {
    const query = `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING id, name, email;
    `;
    const values = [name, email];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async select(columns = 'id, name, email') {
    const query = `SELECT ${columns} FROM users;`;
    const { rows } = await pool.query(query);
    return rows;
  }
}

export default User;
