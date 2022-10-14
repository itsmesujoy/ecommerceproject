const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET


const authMiddleware =  (req, res, next)=> {
    console.log('req.headers.authorization', req.headers.authorization)
    if (req.headers && req.headers.authorization) {
        let cb =  (err, decode)=> {
            if (err) {
                console.log(err)
                let error = new Error('Invalid token 2')
                next(error)
            }
            req.user = decode
            next();
        }
        jwt.verify(req.headers.authorization.split('Bearer ')[1], JWT_SECRET, cb);
    } else {
        // console.log("hhhhhhhhhhhhhhhhhhhhhh")
        // let error = new Error()
        // error.message = 'Invalid token 1'
        // error.code = 401
        // next(error)
        res.status(401)
        res.json({message: 'token invalid'})
    }
}

module.exports = authMiddleware