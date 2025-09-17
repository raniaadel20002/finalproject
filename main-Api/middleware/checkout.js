const checkout = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send('Unauthorized..........');
    }
    next();
} 

module.exports = {checkout}