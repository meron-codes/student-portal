const pool = require('../db');

const Opportunity = {
    create: async ({ title, description, type, target_grade }) => {
        const result = await pool.query(
            'INSERT INTO opportunities (title,description,type,target_grade) VALUES ($1,$2,$3,$4) RETURNING *',
            [title,description,type,target_grade]
        );
        return result.rows[0];
    },
    getForStudent: async (grade_level) => {
        return (await pool.query(
            'SELECT * FROM opportunities WHERE target_grade IS NULL OR target_grade=$1 ORDER BY created_at DESC',
            [grade_level]
        )).rows;
    }
};

module.exports = Opportunity;
