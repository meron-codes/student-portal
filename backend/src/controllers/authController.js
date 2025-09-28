const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const JWT_SECRET = process.env.JWT_SECRET || 'please-change-me';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

exports.register = async (req, res) => {
  // For production: restrict who can register (admin creates students)
  try {
    const { email, password, role = 'student' } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) RETURNING id, email, role, created_at`,
      [email.toLowerCase(), hashed, role]
    );
    const user = result.rows[0];
    res.status(201).json({ user });
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: 'Email already exists' });
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { rows } = await pool.query('SELECT id, email, password_hash, role FROM users WHERE email=$1', [email.toLowerCase()]);
    const user = rows[0];
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // update last_login
    await pool.query('UPDATE users SET last_login = now() WHERE id=$1', [user.id]);

    res.json({ token, user: { id: user.id, email: user.email, role: user.role }});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
