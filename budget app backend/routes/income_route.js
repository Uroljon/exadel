const { get_income_by_id, create_income, update_income, delete_income, get_all_income } = require("../controllers/income_controller");

const router = require("express").Router();

// CRUD income
router.post("/", create_income)
router.get("/all", get_all_income)
router.get("/:id", get_income_by_id)
router.put("/:id", update_income)
router.delete("/:id", delete_income)

module.exports = {
    endpoint: "/income",
    router
}
