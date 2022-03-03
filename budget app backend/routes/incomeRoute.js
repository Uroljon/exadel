const router = require("express").Router();

// create income
router.post("/add", (req, res) => {
    const {title} = req.body; //there will be other fields, like income_amount
    res.status(200).json({
        ok: true,
        message: `${title} income has been created`
    })
})

module.exports = {
    endpoint: "/income",
    router
}