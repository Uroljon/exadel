const transactions = require("../models/transactions");

module.exports = class {
    static async get_all_expanse(req, res) {
        let results = await transactions.find({
            account_id: req.body.account_id,
            type: "expanse"
        })
        res.status(200).json({
            results
        })
    }
    static async get_expanse_by_id(req, res) {
        const result = await transactions.findById(req.params.id)
        if (result) {
            res.status(200).json({
                result
            })
        } else {
            res.status(403).json({
                ok: false,
                message: `${req.params.id} expanse doesn't exist`
            })
        }
    }
    static async create_expanse(req, res) {
        try {
            const created = await transactions.create({
                ...req.body,
                type: "expanse"
            })
            res.status(201).json({
                created
            })
        } catch (error) {
            res.status(403).json({
                ok: false,
                message: error + ""
            })
        }
    }
    static async update_expanse(req, res) {
        try {
            const created = await transactions.findByIdAndUpdate(req.params.id, {
                ...req.body,
                type: "expanse"
            })
            res.status(200).json({
                created
            })
        } catch (error) {
            res.status(403).json({
                ok: false,
                message: error + ""
            })
        }
    }
    static async delete_expanse(req, res) {
        try {
            const deleted = await transactions.findByIdAndDelete(req.params.id)
            res.status(200).json({
                deleted
            })
        } catch (error) {
            res.status(403).json({
                ok: false,
                message: error + ""
            })
        }
    }
}