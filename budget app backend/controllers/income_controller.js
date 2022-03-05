module.exports = class {
    static income_GET(req, res) {
        if(req.params.id === "all"){
            res.status(200).json({
                ok: true,
                message: `All income GET!`
            })
        }else{
            res.status(200).json({
                ok: true,
                message: `${req.params.id} income has been requested`
            })
        }
    }
    static income_POST(req, res) {
        const { title } = req.body; //there will be other fields, like income_amount
        res.status(201).json({
            ok: true,
            message: `${title} income has been created`
        })
    }
    static income_PUT(req, res) {
        const { title } = req.body; //there will be other fields, like income_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} income has been updated with new title : ${title}`
        })
    }
    static income_DELETE(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} income has been deleted`
        })
    }
}