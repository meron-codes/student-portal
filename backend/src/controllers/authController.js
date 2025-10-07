const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }
};

exports.addUser = async (req, res) => {
  const { full_name, email, password, student_id, grade, field, role } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (full_name, email, password_hash, student_id, grade, field, role)
      VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING full_name, grade, role;
    `;
    const result = await pool.query(query, [full_name, email, hashed, student_id, grade, field, role || 'student']);
    res.status(201).json({ message: 'User added successfully', user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add user' });
  }
};
