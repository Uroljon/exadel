const { login_POST, logout_POST } = require("../controllers/auth_controller");

const router = require("express").Router();

router.post("/login", login_POST)
router.post("/logout", logout_POST)

module.exports = {
    endpoint: "/auth",
    router
}