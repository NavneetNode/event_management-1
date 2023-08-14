const authController = require("../controllers/auth.controller")

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.send("server is running")
    })
    app.post('/auth/signup', authController.signup)
    app.post('/auth/signin', authController.signin)
}