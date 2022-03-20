const { create_obligatory, get_obligatory_by_id, update_obligatory, delete_obligatory, get_all_obligatories } = require("../controllers/obligatory_controller");
const router = require("express").Router();

// CRUD category
router.post("/", create_obligatory)
router.get("/all", get_all_obligatories)
router.get("/:id", get_obligatory_by_id)
router.put("/:id", update_obligatory)
router.delete("/:id", delete_obligatory)

module.exports = {
    endpoint: "/obligatory",
    router
}