const pool = require('../db');

const User = {
    getAll: async () => (await pool.query('SELECT * FROM users')).rows,
    getById: async (id) => (await pool.query('SELECT * FROM users WHERE user_id=$1',[id])).rows[0],
    create: async ({ username, password, role }) => {
        const result = await pool.query(
            'INSERT INTO users (username,password,role) VALUES ($1,$2,$3) RETURNING *',
            [username,password,role]
        );
        return result.rows[0];
    }
};

module.exports = User;
