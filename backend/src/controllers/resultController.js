const pool = require('../config/db');

const addResult = async (req, res) => {
  try {
    const { student_id, subject, grade, gpa } = req.body;
    const result = await pool.query(
      'INSERT INTO results (student_id, subject, grade, gpa) VALUES ($1, $2, $3, $4) RETURNING *',
      [student_id, subject, grade, gpa]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getResultsByStudent = async (req, res) => {
  try {
    const { student_id } = req.params;
    const results = await pool.query('SELECT * FROM results WHERE student_id=$1', [student_id]);
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addResult, getResultsByStudent };
