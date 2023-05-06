import React from 'react'
import Button from './Button'
import {dateFormat} from "../utils/dateFormat"
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../utils/Icons';

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
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
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
    <div className="flex w-full gap-4 p-4 mb-4 align-middle bg-black rounded-lg" indicator={indicatorColor}>
            <div className="w-[80px] h-[80px] rounded-lg bg-[#F5F5F5] flex align-middle justify-center">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="flex flex-col flex-1 gap-1">
                <h5 className='relative pl-8 text-xl'>{title}</h5>
                <div className="flex justify-between align-middle">
                    <div className="flex gap-6 align-middle">
                        <p >{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="bg-white">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'$fff'}
                            color={'#000'}
                            iColor={'#fff'}
                            hColor={'green-500'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default IncomeItem