
var express = require('express');
var router = express.Router();
var productCtrl = require("../controller/products")
const authMiddleware = require('../middlewares/auth-middleware')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
/* GET users listing. */
// router.get('/', authMiddleware, async function (req, res, next) {
router.get('/', async function (req, res, next) {
    try {

        let data = await productCtrl.list()
        res.json({ message: 'data successfully added..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data', error: e });
    }

});

// router.post('/', authMiddleware, async function (req, res, next) {
router.post('/', async function (req, res, next) {
    try {
        console.log(req.body)
        let data = await productCtrl.add(req.body)
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

        let data = await productCtrl.del(id)
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
        let data = await productCtrl.update(body)
        res.json({ message: 'data successfully updated..', data: data });
    }
    catch (e) {
        console.log(e)
        res.json({ message: 'failed to get data' });
    }

});
router.post('/upload', authMiddleware, upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.json({ message: "upload completed", file: req.file })
    console.log(req.file);
})

module.exports = router;