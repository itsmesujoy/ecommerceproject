
var express = require('express');
var router = express.Router();
var roleCtrl = require("../controller/role")

/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {

        let data = await roleCtrl.list()
        res.json({ message: 'data successfully added..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data', error: e });
    }

});

router.post('/', async function (req, res, next) {
    try {
        console.log(req.body)
        let data = await roleCtrl.add(req.body)
        res.json({ message: 'data successfully inserted..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data' });
    }

});


router.delete('/:myId', async function (req, res, next) {
    try {
        let id = req.params.myId

        let data = await roleCtrl.del(id)
        res.json({ message: 'data successfully deleted..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data' });
    }

});


router.put('/', async function (req, res, next) {
    try {
        let body = req.body
        let data = await roleCtrl.update(body)
        res.json({ message: 'data successfully updated..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data' });
    }

});
module.exports = router;