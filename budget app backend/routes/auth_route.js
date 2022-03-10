const { login, logout } = require("../controllers/auth_controller");
const router = require("express").Router();

router.post("/login", login)
router.post("/logout", logout)

module.exports = {
    endpoint: "/auth",
    router
}