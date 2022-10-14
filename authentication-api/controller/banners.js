const bannersModel = require('../model/banners')

const update = async (body) => {
    let newobj = {
        path: body.path,
        is_active: body.is_active
        
    }
    // if (body.status !== undefined) newobj.status
    let result = await bannersModel.updateOne({ _id: body.id }, newobj)
    return result
}
const add = async (body) => {
    let result =await bannersModel.create( {
        path: body.path,
        is_active: body.is_active
    
    })
    // if (body.status !== undefined) newobj.status
 
    return result
}
const list = async () => {
    let result = await bannersModel.find()
    return result
}

const del = async (id) => {
    let result = await bannersModel.deleteOne({ id: id })
    return result
}

module.exports = {
    add: add,
    update: update,
    list: list,
    del: del
}