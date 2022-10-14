const ProductModel = require('../model/products')

const update = async (body) => {
    let newobj = {
        name: body.name,
        description: body.description,
        price: body.price,
        strikeprice: body.strikeprice
    }
    // if (body.status !== undefined) newobj.status
    let result = await ProductModel.updateOne({ _id: body.id }, newobj)
    return result
}
const add = async (body) => {
    let result =await ProductModel.create( {
        name: body.name,
        description: body.description,
        price: body.price,
        strikeprice: body.strikeprice,
        category: body.category,
         file: body.file
    })
    // if (body.status !== undefined) newobj.status
 
    return result
}
const list = async () => {
    let result = await ProductModel.find().populate('category')
    return result
}

const del = async (id) => {
    let result = await ProductModel.deleteOne({ _id: id })
    return result
}

module.exports = {
    add: add,
    update: update,
    list: list,
    del: del
}