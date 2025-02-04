const jwt = require('jsonwebtoken');
const User = require('../models/User');
exports.protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized' });
    }
};

exports.adminOnly = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin only access' });
    }
    next();
};