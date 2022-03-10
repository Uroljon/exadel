module.exports = class {
    static get_all_obligatories(req, res) {
        res.status(200).json({
            ok: true,
            message: `All obligatory GET!`
        })
    }
    static get_obligatory_by_id(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} obligatory has been requested`
        })
    }
    static create_obligatory(req, res) {
        const { title } = req.body; //there will be other fields, like obligatory_amount
        res.status(201).json({
            ok: true,
            message: `${title} obligatory has been created`
        })
    }
    static update_obligatory(req, res) {
        const { title } = req.body; //there will be other fields, like obligatory_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} obligatory has been updated with new title : ${title}`
        })
    }
    static delete_obligatory(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} obligatory has been deleted`
        })
    }
}