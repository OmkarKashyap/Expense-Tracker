const IncomeSchema = require("../models/IncomeModel")
const mongoose = require('mongoose')

exports.addIncome = async (req,res) => {
    const {title, amount, category, description, date}= req.body
    const income = IncomeSchema({
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
        res.status(200).json({message: "Income added"})
        await income.save()
    } catch(error){
        res.status(500).json({error: "Server Error"})
    }
} 

exports.getIncome = async (req,res) => {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({error:"Server Error"})
    }
}

exports.deleteIncome = async (req,res) => {
    const {id} = req.params
    IncomeSchema.findByIdAndDelete(id)
    .then((income) => {res.status(200).json({message:"Income Deleted"})})
    .catch((err) => {res.status(500).json({error:"Server Error"})})
}