var express = require('express');
var router = express.Router();
const userCtrl=require("../controller/users")
const authMiddleware = require('../middlewares/auth-middleware')
/* GET users listing. */
router.get('/', authMiddleware, async function (req, res, next) {
  try {

    let data = await userCtrl.list()
    res.json({ message: 'data successfully added..', data: data });
  }
  catch (e) {
    console.log(e)
    res.json({ message: 'failed to get data', error: e });
  }

});

router.get('/:id', authMiddleware, async function (req, res, next) {
  try {
    let id = req.params.id
    let data = await userCtrl.listById(id)
    res.json({ message: 'data successfully added..', data: data });
  }
  catch (e) {
    console.log(e)
    res.json({ message: 'failed to get data', error: e });
  }

});


router.post('/',  async function (req, res, next) {
  try {
    console.log(req.body)
    let data = await userCtrl.add(req.body)
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

    let data = await userCtrl.del(id)
    res.json({ message: 'data successfully deleted..', data: data });
  }
  catch (e) {
    console.log(e)
    res.json({ message: 'failed to get data' });
  }
});


router.put('/', authMiddleware,  async function (req, res, next) {
  try {
    let body = req.body
    let data = await userCtrl.update(body)
    res.json({ message: 'data successfully updated..', data: data });
  }
  catch (e) {
    console.log(e)
    res.json({ message: 'failed to get data' });
  }

});

router.post('/login', async function (req, res, next) {
  try {
    let body = req.body
    let data = await userCtrl.login(body)
    res.json({ message: 'login api complted..', data: data });
  }
  catch (e) {
    console.log(e)
    res.json({ message: 'login api failed' });
  }

});


router.post('/upload', async function (req, res, next) {
  try {
    let body = req.body
    let data = await userCtrl.even(body)
    res.json({ message: 'number is updated', data: data });
  }
  catch (e) {
    console.log(e)
    res.json({ message: 'number updation failed' });
  }
});




module.exports = router;
