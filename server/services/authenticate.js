const session = require("express-session");

// Middleware to check if a user is authenticated
function isAuthenticated(req, res, next) {
    console.log("us",req.session.user);
    console.log("sess",req.session);
    if (req.session.user) {
        return next();
    } else {
        res.redirect("/login");
    }
}


module.exports = {isAuthenticated};