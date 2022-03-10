const { create_category, delete_category, update_category, get_category_by_id, get_all_categories } = require("../controllers/category_controller");

const router = require("express").Router();

// CRUD category
router.post("/", create_category)
router.get("/all", get_all_categories)
router.get("/:id", get_category_by_id)
router.put("/:id", update_category)
router.delete("/:id", delete_category)

module.exports = {
    endpoint: "/category",
    router
}