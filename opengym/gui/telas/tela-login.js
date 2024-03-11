const facade = require('../../../controladores/facade');

class TelaLogin {
    async index(req, res) {
        res.render('home', {});
    }

    async login(req, res) {
        if (req.method === 'POST') {
            console.log(req.body);
            res.render('home.ejs');
            return;
        }

        res.render('auth/login', {});
    }

    async cadastrar(req, res) {
        res.render('auth/cadastrar', {});
    }
}

module.exports = TelaLogin;
