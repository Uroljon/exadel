const categories = require("../models/categories");

module.exports = class {
    static async get_all_categories(req, res) {
        let results = await categories.find({
            user_id: req.user._id
        })
        res.status(200).json({
            results
        })
    }
    static async get_category_by_id(req, res) {
        let result = await categories.findById(req.params.id)
        if(result){
            res.status(200).json({
                result
            })
        }else{
            res.status(403).json({
                ok: false,
                message: `${req.params.id} category doesn't exist`
            })
        }
    }
    static async create_category(req, res) {
        try {
            let created = await categories.create({
                user_id: req.user._id,
                ...req.body
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
    static async update_category(req, res) {
        try {
            let created = await categories.findByIdAndUpdate(req.params.id, req.body)
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
    static async delete_category(req, res) {
        try {
            let deleted = await categories.findByIdAndDelete(req.params.id)
            if(deleted){
                res.status(200).json({
                    deleted
                })
            }else{
                throw new Error("No category found with given id")
            }
        } catch (error) {
            res.status(403).json({
                ok: false,
                message: error + ""
            })
        }
    }
}