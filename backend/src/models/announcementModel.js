const pool = require('../db');

const Announcement = {
    create: async ({ title, message, created_by, target_grade, target_section }) => {
        const result = await pool.query(
            'INSERT INTO announcements (title,message,created_by,target_grade,target_section) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [title,message,created_by,target_grade,target_section]
        );
        return result.rows[0];
    },
    getForStudent: async (grade_level) => {
        return (await pool.query(
            'SELECT * FROM announcements WHERE target_grade IS NULL OR target_grade=$1 ORDER BY created_at DESC',
            [grade_level]
        )).rows;
    }
};

module.exports = Announcement;
