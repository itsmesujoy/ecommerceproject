const coupensModel = require('../model/coupens')

const update = async (body) => {
    let newobj = {
        min_amount: body.min_amount,
        max_amount: body.max_amount,
        value: body.value,
        max_discount: body.max_discount
        
    }
    // if (body.status !== undefined) newobj.status
    let result = await coupensModel.updateOne({ _id: body.id }, newobj)
    return result
}
const add = async (body) => {
    let result =await coupensModel.create( {
        min_amount: body.min_amount,
        max_amount: body.max_amount,
        value: body.value,
        max_discount: body.max_discount
    
    })
    // if (body.status !== undefined) newobj.status
 
    return result
}
const list = async () => {
    let result = await coupensModel.find()
    return result
}

const del = async (id) => {
    let result = await coupensModel.deleteOne({ _id: id })
    return result
}

module.exports = {
    add: add,
    update: update,
    list: list,
    del: del
}