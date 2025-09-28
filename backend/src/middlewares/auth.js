// src/middlewares/auth.js
const checkRole = (roles) => {
    return (req, res, next) => {
        const user = req.user; // user should be added via auth middleware
        if (!user) return res.status(401).json({ message: "Unauthorized" });
        if (!roles.includes(user.role)) return res.status(403).json({ message: "Access denied" });
        next();
    };
};

module.exports = { checkRole };
