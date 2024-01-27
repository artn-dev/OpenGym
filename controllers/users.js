const loginView = (req, res) => {
    res.render('auth/login', {});
}

const peformLogin = (req, res) => {
    console.log(req.body);
    res.render('home.ejs');
}

const registerView = (req, res) => {
    res.render('auth/register', {});
}


module.exports = {
    loginView,
    peformLogin,
    registerView,
};
