module.exports = function (req, res, next) {
    // check whether user has admin rights
    if(req.user.role !== "admin" && req.user.role !== "owner"){
        res.json({
            ok: false,
            message: "You need to be an admin or owner!"
        })
    }else{
        next()
    }
}