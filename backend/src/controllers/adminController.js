const pool = require('../db');

// Add result + notify student
exports.addResult = async (req, res) => {
  const { student_id, subject, result_type, score, grade, field } = req.body;

  try {
    const query = `
      INSERT INTO results (student_id, subject, result_type, score, grade, field)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, subject, result_type;
    `;
    const result = await pool.query(query, [student_id, subject, result_type, score, grade, field]);

    // Notification
    await pool.query(
      `INSERT INTO notifications (student_id, message)
       VALUES ($1, $2)`,
      [student_id, `New ${result_type} result uploaded for ${subject}`]
    );

    res.json({ message: 'Result added and student notified', data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add result' });
  }
};

// Edit result + notify student
exports.editResult = async (req, res) => {
  const { id } = req.params;
  const { score } = req.body;

  try {
    const updated = await pool.query(
      `UPDATE results SET score=$1, updated_at=NOW() WHERE id=$2 RETURNING student_id, subject`,
      [score, id]
    );

    if (updated.rows.length === 0) return res.status(404).json({ message: 'Result not found' });
    const { student_id, subject } = updated.rows[0];

    await pool.query(
      `INSERT INTO notifications (student_id, message)
       VALUES ($1, $2)`,
      [student_id, `Your result for ${subject} was updated.`]
    );

    res.json({ message: 'Result updated and student notified' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update result' });
  }
};

// Delete result (no notification)
exports.deleteResult = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(`DELETE FROM results WHERE id=$1`, [id]);
    res.json({ message: 'Result deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete result' });
  }
};
