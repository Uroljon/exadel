module.exports = class{
    static account_GET(req, res){

        if(req.params.id === "all"){
            res.status(200).json({
                ok: true,
                message: `All accounts GET!`
            })
        }else{
            res.status(200).json({
                ok: true,
                message: `${req.params.id} account GET!`
            })
        }
       
    }
    static account_POST(req, res){
        const {title, currency} = req.body;
        res.status(201).json({
            ok: true,
            message: `${title} account has been created with ${currency} currency`
        })
    }
    static account_PUT(req, res){
        const {currency} = req.body;
        res.status(200).json({
            ok: true,
            message: `${req.params.id} account has been updated with ${currency} currency`
        })
    }
    static account_DELETE(req, res){
        const {id, currency} = req.params;
        res.status(200).json({
            ok: true,
            message: `${id} account has been deleted`
        })
    }
}