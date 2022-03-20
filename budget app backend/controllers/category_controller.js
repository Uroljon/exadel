const categories = require("../models/categories");

module.exports = class {
    static async get_all_categories(req, res) {
        let results = await categories.find({
            user_id: req.user._id
        })
        res.status(200).json({
            ok: true,
            results,
            message: `All category GET!`
        })
    }
    static async get_category_by_id(req, res) {
        let result = await categories.findById(req.params.id)
        if(result){
            res.status(200).json({
                ok: true,
                result,
                message: `${req.params.id} category has been requested`
            })
        }else{
            res.status(403).json({
                ok: false,
                message: `${req.params.id} category doesn't exist`
            })
        }
    }
    static async create_category(req, res) {
        const { title, type } = req.body;
        try {
            let created = await categories.create({
                user_id: req.user._id,
                title,
                type
            })
            res.status(201).json({
                ok: true,
                created,
                message: `${title} category has been created`
            })
        } catch (error) {
            res.status(403).json({
                ok: false,
                message: error + ""
            })
        }
    }
    static async update_category(req, res) {
        const { title, type } = req.body;
        try {
            let created = await categories.findByIdAndUpdate(req.params.id, {
                title,
                type
            })
            res.status(201).json({
                ok: true,
                created,
                message: `${req.params.id} category has been updated.`
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
                    ok: true,
                    message: `${req.params.id} category has been deleted`
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