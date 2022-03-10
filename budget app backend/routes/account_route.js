const { get_account_by_id, create_account, update_account, delete_account, get_all_accounts } = require("../controllers/account_controller");
const router = require("express").Router();

// CRUD accounts
router.post("/", create_account)
router.get("/all", get_all_accounts)
router.get("/:id", get_account_by_id)
router.put("/:id", update_account)
router.delete("/:id", delete_account)

module.exports = {
    endpoint: "/account",
    router
}