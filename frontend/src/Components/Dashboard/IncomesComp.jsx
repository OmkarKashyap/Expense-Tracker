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
    <div className='w-full h-screen text-white bg-gray-900'>
      <div className='bg-gray-900'>
        <div className='flex flex-col mt-20 '>
          <h1 className='flex justify-center text-2xl font-bold'>Incomes</h1>
          <h2 className="flex justify-center text-3xl font-semibold text-green-500 font-Poppins">Total Income: <span>${totalIncome()}</span></h2>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-10 ml-5 bg-gray-900'>
            <div><Form /></div>
            <div className=''>
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