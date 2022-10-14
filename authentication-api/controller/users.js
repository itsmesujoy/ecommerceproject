const UserModel = require('../model/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const add = async (body) => {
    body.password = await bcrypt.hashSync(body.password, 10)
    let emailResponse = await UserModel.findOne({ email: body.email })
    if (emailResponse !== null) {
        return {
            error: 'Email is already taken'
        }
    }
    let result = await UserModel.create({
        name: body.name,
        email: body.email,
        password: body.password,
    })
    let response = await UserModel.findById(result._id).select({ name: 1, _id: 1, email: 1 })
    return response
}

const update = async (body) => {
    let newobj = {
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role
    }
    // if (body.status !== undefined) newobj.status
    let result = await UserModel.updateOne({ _id: body.id }, newobj)
    return result
}

const list = async () => {
    let result = await UserModel.find().select({ name: 1, _id: 1, email: 1 })
    return result
}

const del = async (id) => {
    let result = await UserModel.deleteOne({ _id: id })
    return result
}

const listById = async (id) => {
    let result = await UserModel.findOne({ _id: id }).select({ name: 1, _id: 1, email: 1 })
    return result
}

const login = async (body) => {
    let emailResponse = await UserModel.findOne({ email: body.email })
    if (emailResponse === null) {
        return {
            error: 'Invalid credentials'
        }
    }

    let compareResult = bcrypt.compareSync(body.password, emailResponse.password)
    if (!compareResult) {
        return {
            error1: 'Invalid credentials'
        }
    }

    let response = await UserModel.findById(emailResponse._id).select({ name: 1, _id: 1, email: 1, role: 1 })
    let tokenObj = {
        user: response
    }
    let token = jwt.sign(tokenObj, JWT_SECRET)
    return { token }
}
const even = async (body) => {
    if (body.number % 2 === 0) {
        return {
            message: 'number is even'
        }
    }
    else {
        return { message: "number is odd" }
    }
}



module.exports = {
    add: add,
    update: update,
    list: list,
    del: del,
    listById: listById,
    login: login,
    even: even

}