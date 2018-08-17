function checkAuth(req, res, next) {
    if(req.userId) {
        next();
    } else {
        return res.status(404).send({message: "No access to this page!"});
    }

}

module.exports = checkAuth;