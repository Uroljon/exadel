const { login, logout } = require("../controllers/auth_controller");
const router = require("express").Router();

router.post("/login", login)
router.post("/logout", logout)

router.get("/", async (req, res) => {
    // const users = require("../models/users")
    // let a = await users.create({
    //     name: "Uroljon",
    //     email: "uroljon@exadel.com",
    //     password: "Uroljon_admin",
    //     role: "owner",
    //     country: "Uzbekistan"
    // })
    // res.json(a)
    res.json({
        ok: true
    })
})

module.exports = {
    endpoint: "/auth",
    router
}