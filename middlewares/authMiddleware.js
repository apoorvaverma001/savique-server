const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

exports.protech = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) return res.status(401).json({ message: 'No token found' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};