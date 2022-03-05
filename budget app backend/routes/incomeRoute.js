const { income_GET, income_POST, income_PUT, income_DELETE } = require("../controllers/income_controller");

const router = require("express").Router();

// CRUD income
router.post("/", income_POST)
router.get("/:id", income_GET)
router.put("/:id", income_PUT)
router.delete("/:id", income_DELETE)

module.exports = {
    endpoint: "/income",
    router
}
