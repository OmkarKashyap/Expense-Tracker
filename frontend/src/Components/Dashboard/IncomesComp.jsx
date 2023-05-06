import React,{useEffect} from 'react'
import { useGlobalContext } from '../../context/globalContext'
import Form from "./Form"
import IncomeItem from '../IncomeItem'

function IncomesComp() {

  const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

  useEffect(() =>{
    getIncomes()
  }, [])

  return (
    <div className='w-full h-screen text-white bg-black'>
      <div>
        <h1>Incomes</h1>
        <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
        <div className='flex mt-20'>
            <div><Form /></div>
            <div>
              {incomes.map((income) => {
                const {_id, title, amount, date, category, description, type} = income;
                return <IncomeItem
                  key={_id}
                  id={_id} 
                  title={title} 
                  description={description} 
                  amount={amount} 
                  date={date} 
                  type={type}
                  category={category} 
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default IncomesComp