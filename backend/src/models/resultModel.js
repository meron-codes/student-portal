const pool = require('../db');

const Result = {
    create: async ({ student_id, subject, grade, teacher_id }) => {
        const result = await pool.query(
            'INSERT INTO results (student_id,subject,grade,teacher_id) VALUES ($1,$2,$3,$4) RETURNING *',
            [student_id,subject,grade,teacher_id]
        );
        return result.rows[0];
    },
    getByStudent: async (student_id) => {
        return (await pool.query('SELECT * FROM results WHERE student_id=$1',[student_id])).rows;
    }
};

module.exports = Result;
