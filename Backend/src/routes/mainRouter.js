const {Router} = require('express');



const mainRouter = Router();

mainRouter.get('/Cards', (req, res)=>{
    res.send('Cards')
});


module.exports = mainRouter;