const express = require('express')
const router = express()

const {addIncome, getIncome, deleteIncome} = require('../controllers/income')
const {addExpense, getExpense, deleteExpense} = require("../controllers/expense")


router.post("/add-income", addIncome)
    .get("/get-incomes", getIncome)
    .delete("/delete-income/:id", deleteIncome)

router.post("/add-expense", addExpense)
    .get("/get-expense", getExpense)
    .delete("/delete-expense/:id", deleteExpense)


module.exports = router