const transactions = require("../models/transactions");

module.exports = class {
    static async get_all_expanse(req, res) {
        let results = await transactions.find({
            account_id: req.body.account_id,
            type: "expanse"
        })
        res.status(200).json({
            ok: true,
            results,
            message: `All expanse for ${req.body.account_id}!`
        })
    }
    static async get_expanse_by_id(req, res) {
        const result = await transactions.findById(req.params.id)
        if (result) {
            res.status(200).json({
                ok: true,
                result,
                message: `${req.params.id} expanse has been requested`
            })
        } else {
            res.status(403).json({
                ok: false,
                message: `${req.params.id} expanse doesn't exist`
            })
        }
    }
    static async create_expanse(req, res) {
        const { title, amount, description, payer, pay_day, category_id, account_id } = req.body;
        try {
            const created = await transactions.create({
                title,
                amount,
                description,
                payer,
                type: "expanse",
                pay_day,
                category_id,
                account_id
            })
            res.status(201).json({
                ok: true,
                created,
                message: `${title} expanse has been created`
            })
        } catch (error) {
            res.status(403).json({
                ok: false,
                message: error + ""
            })
        }
    }
    static async update_expanse(req, res) {
        const { title, amount, description, payer, pay_day, category_id, account_id } = req.body;
        try {
            const created = await transactions.findByIdAndUpdate(req.params.id, {
                title,
                amount,
                description,
                payer,
                type: "expanse",
                pay_day,
                category_id,
                account_id
            })
            res.status(200).json({
                ok: true,
                created,
                message: `${req.params.id} expanse has been updated with new title : ${title}`

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
                ok: true,
                deleted,
                message: `${req.params.id} expanse has been deleted`
            })
        } catch (error) {
            res.status(403).json({
                ok: false,
                message: error + ""
            })
        }
    }
}