const pool = require('../db');

const Schedule = {
    create: async ({ grade_level, section, subject, day, time }) => {
        const result = await pool.query(
            'INSERT INTO schedules (grade_level,section,subject,day,time) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [grade_level,section,subject,day,time]
        );
        return result.rows[0];
    },
    getByGrade: async (grade_level) => {
        return (await pool.query('SELECT * FROM schedules WHERE grade_level=$1 ORDER BY day,time',[grade_level])).rows;
    }
};

module.exports = Schedule;
