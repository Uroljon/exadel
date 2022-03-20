const accounts = require("../models/accounts");
const mongoose = require("mongoose")

module.exports = class {
    static async get_all_accounts(req, res) {
        const results = await accounts.find({
            user_id: req.user._id
        })
        res.status(200).json({
            ok: true,
            accounts: results,
            message: `All accounts of user (${req.user._id})`
        })
    }
    static async get_account_by_id(req, res) {
        const result = await accounts.findById(req.params.id)
        if(result){
            res.status(200).json({
                ok: true,
                account: result,
                message: `${req.params.id} account details sent.`
            })
        }else{
            res.status(403).json({
                ok: false,
                message: `${req.params.id} account doesn't exist.`
            })
        }
    }
    static async create_account(req, res) {
        const user_id = req.user._id;
        const { title, amount, currency, description } = req.body;
        try {
            const created = await accounts.create({
                user_id: new mongoose.Types.ObjectId(user_id),
                title,
                amount,
                currency,
                description
            })

            res.status(201).json({
                ok: true,
                created,
                message: `${title} account has been created.`
            })
        } catch (error) {
            res.status(403).json({
                ok: "false",
                message: `Duplicate entry violation: ${user_id} + ${title}`
            })
        }
    }
    static async update_account(req, res) {
        const { title, amount, currency, description } = req.body;
        try {
            let updated = await accounts.findByIdAndUpdate(req.params.id, {
                title,
                amount,
                currency,
                description
            })
            res.status(200).json({
                ok: true,
                updated,
                message: `${req.params.id} account has been updated.`
            })
        } catch (error) {
            res.json({
                ok: false,
                message: error + ""
            })
        }
    }
    static async delete_account(req, res) {
        const deleted = await accounts.findByIdAndDelete(req.params.id)
        if (deleted) {
            res.status(200).json({
                ok: true,
                deleted,
                message: `${req.params.id} account has been deleted`
            })
        } else {
            res.status(200).json({
                ok: false,
                message: `${req.params.id} account doesn't exist!`
            })
        }
    }
}