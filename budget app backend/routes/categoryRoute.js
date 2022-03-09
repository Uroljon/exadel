const { category_POST, category_DELETE, category_PUT, category_GET } = require("../controllers/category_controller");

const router = require("express").Router();

// CRUD category
router.post("/", category_POST)
router.get("/:id", category_GET)
router.put("/:id", category_PUT)
router.delete("/:id", category_DELETE)

module.exports = {
    endpoint: "/category",
    router
}