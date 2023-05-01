const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense = async (req,res) => {
    const {title, amount, category, description, date}= req.body
    const expense = ExpenseSchema({
        title, amount, category, description, date
    })

    try{
        //validation
        if(!title || !category || !description || !date){
            return res.status(400).json({error: "All fields are required!"})
        }
        if(amount<=0 || !amount === 'number'){
            return res.status(400).json({error: "Amount must be a positive number!"})
        }
        res.status(200).json({message: "Expense added"})
        await expense.save()
    } catch(error){
        res.status(500).json({error: "Server Error"})
    }
} 

exports.getExpense = async (req,res) => {
    try{
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({error:"Server Error"})
    }
}

exports.deleteExpense = async (req,res) => {
    const {id} = req.params
    ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {res.status(200).json({message:"Expense Deleted"})})
    .catch((err) => {res.status(500).json({error:"Server Error"})})
}