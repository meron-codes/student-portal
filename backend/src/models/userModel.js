const jwt = require('jsonwebtoken');

const auth = (allowedRoles = []) => {
  // if allowedRoles is a string, convert to array
  if (typeof allowedRoles === 'string') allowedRoles = [allowedRoles];

  return (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // { id, role }

      // check role
      if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access forbidden: insufficient rights' });
      }

      next();
    } catch {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };
};

module.exports = auth;
