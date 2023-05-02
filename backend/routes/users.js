const express = require('express')
const userRouter = express()

const {addUser, getUser, deleteUser, LoginUser} = require('../controllers/users')


userRouter.post("/register-user", addUser)
    .get("/registered-users", getUser)
    .delete("/delete-registered-user/:id", deleteUser)
    .post("/login-user", LoginUser)


module.exports = userRouter