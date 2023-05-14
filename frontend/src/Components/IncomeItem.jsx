import React from 'react'
import Button from './Button'
import {dateFormat} from "../utils/dateFormat"
import {  book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../utils/Icons';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }

        
    }

  return (
    <div className="flex w-full gap-4 p-4 mb-4 text-black align-middle bg-gray-200 rounded-lg" indicator={indicatorColor}>
            <div className="w-[60px] h-[60px] rounded-lg bg-gray-400 flex align-middle justify-center pt-5">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="flex flex-col flex-1 gap-1 ">
                <h5 className='relative text-xl font-semibold text-black font-Poppins'>{title}</h5>
                <div className="flex justify-between align-middle">
                    <div className="grid grid-cols-8 pt-2 align-middle">
                        <p className="col-span-2 text-black ">$ {amount}</p>
                        <p className='col-span-3'>{calender}  {dateFormat(date)}</p>
                        <div className='col-span-3 pl-2 text-gray-800'>
                            {description}
                        </div>
                    </div>
                    <div className="text-white bg-gray-800 rounded-full ">
                        <Button 
                            icon={trash}
                            bPad={'0.8rem'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default IncomeItem