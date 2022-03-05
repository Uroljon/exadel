module.exports = class {
    static category_GET(req, res) {
        if(req.params.id === "all"){
            res.status(200).json({
                ok: true,
                message: `All category GET!`
            })
        }else{
            res.status(200).json({
                ok: true,
                message: `${req.params.id} category has been requested`
            })
        }
    }
    static category_POST(req, res) {
        const { title } = req.body; //there will be other fields, like category_amount
        res.status(201).json({
            ok: true,
            message: `${title} category has been created`
        })
    }
    static category_PUT(req, res) {
        const { title } = req.body; //there will be other fields, like category_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} category has been updated with new title : ${title}`
        })
    }
    static category_DELETE(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} category has been deleted`
        })
    }
}