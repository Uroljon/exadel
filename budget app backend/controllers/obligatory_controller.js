module.exports = class {
    static obligatory_GET(req, res) {
        if(req.params.id === "all"){
            res.status(200).json({
                ok: true,
                message: `All obligatory GET!`
            })
        }else{
            res.status(200).json({
                ok: true,
                message: `${req.params.id} obligatory has been requested`
            })
        }
    }
    static obligatory_POST(req, res) {
        const { title } = req.body; //there will be other fields, like obligatory_amount
        res.status(201).json({
            ok: true,
            message: `${title} obligatory has been created`
        })
    }
    static obligatory_PUT(req, res) {
        const { title } = req.body; //there will be other fields, like obligatory_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} obligatory has been updated with new title : ${title}`
        })
    }
    static obligatory_DELETE(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} obligatory has been deleted`
        })
    }
}