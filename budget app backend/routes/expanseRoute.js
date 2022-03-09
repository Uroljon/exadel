const { expanse_GET, expanse_POST, expanse_PUT, expanse_DELETE } = require("../controllers/expanse_controller");

const router = require("express").Router();

// CRUD expanse
router.post("/", expanse_POST)
router.get("/:id", expanse_GET)
router.put("/:id", expanse_PUT)
router.delete("/:id", expanse_DELETE)

module.exports = {
    endpoint: "/expanse",
    router
}