module.exports = class {
    static get_all_categories(req, res) {
        res.status(200).json({
            ok: true,
            message: `All category GET!`
        })
    }
    static get_category_by_id(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} category has been requested`
        })
    }
    static create_category(req, res) {
        const { title } = req.body; //there will be other fields, like category_amount
        res.status(201).json({
            ok: true,
            message: `${title} category has been created`
        })
    }
    static update_category(req, res) {
        const { title } = req.body; //there will be other fields, like category_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} category has been updated with new title : ${title}`
        })
    }
    static delete_category(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} category has been deleted`
        })
    }
}