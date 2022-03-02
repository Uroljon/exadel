const router = require("express").Router();

// create category
router.post("/", (req, res) => {
    const {title} = req.body;
    res.status(200).json({
        ok: true,
        message: `${title} category has been created`
    })
})
// delete category
router.delete("/:category_name", (req, res) => {
    res.status(200).json({
        ok: true,
        message: `${req.params.category_name} got deleted!`
    })
   
})

module.exports = {
    endpoint: "/category",
    router
}