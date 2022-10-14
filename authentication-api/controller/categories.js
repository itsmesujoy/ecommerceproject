const categoriesModel = require('../model/categories')

const update = async (body) => {
    let newobj = {
        name: body.name,
        description: body.description
        
    }
    // if (body.status !== undefined) newobj.status
    let result = await categoriesModel.updateOne({ _id: body.id }, newobj)
    return result
}
const add = async (body) => {
    console.log(body.file);
    let result =await categoriesModel.create( {
        name: body.name,
        description: body.description,
        file:body.file
    
    })
    // if (body.status !== undefined) newobj.status
 
    return result
}
const list = async () => {
    let result = await categoriesModel.find()
    return result
}

const del = async (id) => {
    console.log(id);
    let result = await categoriesModel.deleteOne({ _id: id })
    return result
}

module.exports = {
    add: add,
    update: update,
    list: list,
    del: del
}