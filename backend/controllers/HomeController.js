class HomeController{

    async index(req, res){
        res.send("HOME API! - THX 4 VIEW");
    }

}

module.exports = new HomeController();