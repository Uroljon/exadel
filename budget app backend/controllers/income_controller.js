module.exports = class {
    static get_all_income(req, res) {
        res.status(200).json({
            ok: true,
            message: `All income GET!`
        })
    }
    static get_income_by_id(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} income has been requested`
        })
    }
    static create_income(req, res) {
        const { title } = req.body; //there will be other fields, like income_amount
        res.status(201).json({
            ok: true,
            message: `${title} income has been created`
        })
    }
    static update_income(req, res) {
        const { title } = req.body; //there will be other fields, like income_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} income has been updated with new title : ${title}`
        })
    }
    static delete_income(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} income has been deleted`
        })
    }
}