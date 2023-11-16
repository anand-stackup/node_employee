// render home page 
exports.homeRoutes = (req,res) => {
    res.render('index');
}
// render login page
exports.loginRoutes = (req,res) => {
    res.render('login');
}
// render signup page
exports.signupRoutes = (req,res) => {
    res.render('signup');
}
// render view employee details page
exports.viewRoutes = (req,res) => {
    res.render('employee');
}
