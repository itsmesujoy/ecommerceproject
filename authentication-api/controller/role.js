const roleModel = require('../model/role')

const update = async (body) => {
    let newobj = {
        name: body.name,
        description: body.description
        
    }
    // if (body.status !== undefined) newobj.status
    let result = await roleModel.updateOne({ _id: body.id }, newobj)
    return result
}
const add = async (body) => {
    let result =await roleModel.create( {
        name: body.name,
        description: body.description
    
    })
    // if (body.status !== undefined) newobj.status
 
    return result
}
const list = async () => {
    let result = await roleModel.find()
    return result
}

const del = async (id) => {
    let result = await roleModel.deleteOne({ id: id })
    return result
}

module.exports = {
    add: add,
    update: update,
    list: list,
    del: del
}