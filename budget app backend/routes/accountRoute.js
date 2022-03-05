const { account_GET, account_POST, account_PUT, account_DELETE } = require("../controllers/account_controller");

const router = require("express").Router();

// CRUD accounts
router.post("/", account_POST)
router.get("/:id", account_GET)
router.put("/:id", account_PUT)
router.delete("/:id", account_DELETE)

module.exports = {
    endpoint: "/account",
    router
}