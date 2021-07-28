const jwt = require("jsonwebtoken");

tokenCheck = (req, res, next) => {
    if (req.url === "/auth/login" || req.url === "/auth/signup") {
        next();
        return;
    }
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: "auth_error" });
    } else {
        const data = jwt.verify(token);
        if (!data) {
            return res.json({ status: "auth_error" });
        }
        req.role = data.role;
        
        next();
    }
};

module.exports = tokenCheck