
var express = require('express');
var router = express.Router();
var orderCtrl = require("../controller/orders")
const authMiddleware = require('../middlewares/auth-middleware')

/* GET users listing. */
router.get('/', authMiddleware, async function (req, res, next) {
    try {

        let data = await orderCtrl.list()
        res.json({ message: 'data successfully added..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data', error: e });
    }

});

router.post('/', authMiddleware, async function (req, res, next) {
    try {
        console.log(req.body)
        let data = await orderCtrl.add(req.body)
        res.json({ message: 'data successfully inserted..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data' });
    }

});


router.delete('/:myId', authMiddleware, async function (req, res, next) {
    try {
        let id = req.params.myId

        let data = await orderCtrl.del(id)
        res.json({ message: 'data successfully deleted..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data' });
    }

});


router.put('/', authMiddleware, async function (req, res, next) {
    try {
        let body = req.body
        let data = await orderCtrl.update(body)
        res.json({ message: 'data successfully updated..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data' });
    }

});
module.exports = router;