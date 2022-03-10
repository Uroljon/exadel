module.exports = class {
    static get_all_expanse(req, res) {
        res.status(200).json({
            ok: true,
            message: `All expanse GET!`
        })
    }
    static get_expanse_by_id(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} expanse has been requested`
        })
    }
    static create_expanse(req, res) {
        const { title } = req.body; //there will be other fields, like expanse_amount
        res.status(201).json({
            ok: true,
            message: `${title} expanse has been created`
        })
    }
    static update_expanse(req, res) {
        const { title } = req.body; //there will be other fields, like expanse_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} expanse has been updated with new title : ${title}`
        })
    }
    static delete_expanse(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} expanse has been deleted`
        })
    }
}