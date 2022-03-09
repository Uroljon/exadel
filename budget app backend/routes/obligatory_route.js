const { obligatory_POST, obligatory_GET, obligatory_PUT, obligatory_DELETE } = require("../controllers/obligatory_controller");

const router = require("express").Router();

// CRUD category
router.post("/", obligatory_POST)
router.get("/:id", obligatory_GET)
router.put("/:id", obligatory_PUT)
router.delete("/:id", obligatory_DELETE)

module.exports = {
    endpoint: "/obligatory",
    router
}