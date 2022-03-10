module.exports = class {
    static get_all_accounts(req, res) {
        res.status(200).json({
            ok: true,
            message: `All accounts GET!`
        })
    }
    static get_account_by_id(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} account GET!`
        })
    }
    static create_account(req, res) {
        const { title, currency } = req.body;
        res.status(201).json({
            ok: true,
            message: `${title} account has been created with ${currency} currency`
        })
    }
    static update_account(req, res) {
        const { currency } = req.body;
        res.status(200).json({
            ok: true,
            message: `${req.params.id} account has been updated with ${currency} currency`
        })
    }
    static delete_account(req, res) {
        const { id, currency } = req.params;
        res.status(200).json({
            ok: true,
            message: `${id} account has been deleted`
        })
    }
}