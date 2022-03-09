module.exports = class {
    static expanse_GET(req, res) {
        if(req.params.id === "all"){
            res.status(200).json({
                ok: true,
                message: `All expanse GET!`
            })
        }else{
            res.status(200).json({
                ok: true,
                message: `${req.params.id} expanse has been requested`
            })
        }
    }
    static expanse_POST(req, res) {
        const { title } = req.body; //there will be other fields, like expanse_amount
        res.status(201).json({
            ok: true,
            message: `${title} expanse has been created`
        })
    }
    static expanse_PUT(req, res) {
        const { title } = req.body; //there will be other fields, like expanse_amount

        res.status(200).json({
            ok: true,
            message: `${req.params.id} expanse has been updated with new title : ${title}`
        })
    }
    static expanse_DELETE(req, res) {
        res.status(200).json({
            ok: true,
            message: `${req.params.id} expanse has been deleted`
        })
    }
}