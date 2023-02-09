const db = require("../database/models");
const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    try {
        jwt.verify(token, process.env.SECRET);
    } catch (err) {
        return res.status(401).send({message: err.message});
    }
    next();
}

module.exports = {
    verifyToken
}
