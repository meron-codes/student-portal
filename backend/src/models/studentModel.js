const pool = require('../db');

const Student = {
    getAll: async () => (await pool.query('SELECT * FROM students')).rows,
    getById: async (id) => (await pool.query('SELECT * FROM students WHERE student_id=$1',[id])).rows[0],
    create: async ({ user_id, grade_level, section, gpa }) => {
        const result = await pool.query(
            'INSERT INTO students (user_id, grade_level, section, gpa) VALUES ($1,$2,$3,$4) RETURNING *',
            [user_id, grade_level, section, gpa]
        );
        return result.rows[0];
    }
};

module.exports = Student;
