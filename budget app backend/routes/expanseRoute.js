const router = require("express").Router();

// create category
router.post("/add", (req, res) => {
    const {title} = req.body; //there will be other fields, like income_amount
    res.status(200).json({
        ok: true,
        message: `${title} expanse has been created`
    })
})

module.exports = {
    endpoint: "/expanse",
    router
}