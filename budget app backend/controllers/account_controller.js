const users = require("../models/users");
const mongoose = require("mongoose")

module.exports = class {
    static async get_all_accounts(req, res) {
        const { user_id } = req.body
        const accounts = await users.findById(user_id)

        res.status(200).json({
            ok: true,
            accounts,
            message: `All accounts GET!`
        })
    }
    static async get_account_by_id(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} account GET!`
        })
    }
    static async create_account(req, res) {
        const { title, currency } = req.body;
        let a = await users.findOneAndUpdate({
            email: "uroljon@exadel.com"
        }, {
            accounts: {
                id: new mongoose.Types.ObjectId(),
                title: "credit card",
                amount: 500,
                currency: "$",
                description: "just my credit card"
            }
        })
        res.status(201).json({
            ok: true,
            message: `${title} account has been created with ${currency} currency`
        })
    }
    static async update_account(req, res) {
        const { currency } = req.body;
        res.status(200).json({
            ok: true,
            message: `${req.params.id} account has been updated with ${currency} currency`
        })
    }
    static async delete_account(req, res) {
        const { id, currency } = req.params;
        res.status(200).json({
            ok: true,
            message: `${id} account has been deleted`
        })
    }
}