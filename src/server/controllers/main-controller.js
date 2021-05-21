class MainController {
    ping(req, res) {
        return res.status(200).send('megnow');
    }
}

module.exports = new MainController();