const orderModel = require('../model/orders')

const update = async (body) => {
    let newobj = {
        date: body.date,
        total: body.total,
        product_id: body.product_id,
        qty: body.qty
    }
    // if (body.status !== undefined) newobj.status
    let result = await orderModel.updateOne({ _id: body.id }, newobj)
    return result
}
const add = async (body) => {
    let result =await orderModel.create( {
        date: body.date,
        total: body.total,
        product_id: body.product_id,
        qty: body.qty,
       
    
    })
    // if (body.status !== undefined) newobj.status
 
    return result
}
const list = async () => {
    let result = await orderModel.find()
    return result
}

const del = async (id) => {
    let result = await orderModel.deleteOne({ _id: id })
    return result
}

module.exports = {
    add: add,
    update: update,
    list: list,
    del: del
}