"use strict";
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Authorization token missing' });
    }
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(403).json({ error: 'Invalid token' });
    }
};
module.exports = authMiddleware;
