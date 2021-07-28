const jwt = require("jsonwebtoken");

tokenCheck = (req, res, next) => {
    if (req.url === "/auth/login" || req.url === "/auth/signup") {
        next();
        return;
    }
    const token = req.headers.authorization;
    console.log("tokenCheck",token)
    if (!token) {
        console.log('token')
        return res.status(401).json({ status: "auth_error" });
    } else {
        const data = jwt.verify(token,'secret');
        console.log("tokenCHeck data",data)
        if (!data) {
            return res.json({ status: "auth_error" });
        }
        req.role = data.role;
        
        next();
    }
};

module.exports = tokenCheck