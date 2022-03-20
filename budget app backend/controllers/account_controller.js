const accounts = require("../models/accounts");
const mongoose = require("mongoose")

module.exports = class {
    static async get_all_accounts(req, res) {
        const results = await accounts.find({
            user_id: req.user._id
        })
        res.status(200).json({
            accounts: results
        })
    }
    static async get_account_by_id(req, res) {
        const result = await accounts.findById(req.params.id)
        if(result){
            res.status(200).json({
                account: result
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
        try {
            const created = await accounts.create({
                user_id: new mongoose.Types.ObjectId(user_id),
                ...req.body
            })

            res.status(201).json({
                created
            })
        } catch (error) {
            res.status(403).json({
                ok: "false",
                message: `Duplicate entry violation: ${user_id} + ${req.body.title}`
            })
        }
    }
    static async update_account(req, res) {
        try {
            let updated = await accounts.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({
                updated
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
                deleted
            })
        } else {
            res.status(403).json({
                ok: false,
                message: `${req.params.id} account doesn't exist!`
            })
        }
    }
}