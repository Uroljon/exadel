const router = require("express").Router();

// get all accounts
router.get("/all", (req, res) => {
    res.status(200).json({
        ok: true,
        message: `All accounts GET!`
    })
   
})
// create account
router.post("/", (req, res) => {
    const {title, currency} = req.body;
    res.status(200).json({
        ok: true,
        message: `${title} account has been created with ${currency} currency`
    })
})

module.exports = {
    endpoint: "/account",
    router
}