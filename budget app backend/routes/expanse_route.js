const { get_expanse_by_id, create_expanse, update_expanse, delete_expanse, get_all_expanse } = require("../controllers/expanse_controller");

const router = require("express").Router();

// CRUD expanse
router.post("/", create_expanse)
router.get("/all", get_all_expanse)
router.get("/:id", get_expanse_by_id)
router.put("/:id", update_expanse)
router.delete("/:id", delete_expanse)

module.exports = {
    endpoint: "/expanse",
    router
}