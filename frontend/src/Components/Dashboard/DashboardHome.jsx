import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../../styles/theme";
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import Chart from "../Dashboard/Chart"
import ProgressCircle from "../Dashboard/ProgressCircle"

function DashboardHome() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    const netCash = totalIncome()-totalExpenses()
    
  return (
    <Box className='w-full pt-16 bg-gray-900'>
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div className='flex flex-col'>
          <div className="text-3xl font-bold text-white font-poppins ">Dashboard</div>
          <div className='text-green-300'>Welcome to your dashboard</div>
        </div>

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box className="mt-5" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        {/* ROW 1 */}
        <div className='flex justify-between col-span-4 text-white bg-dashboardPrimary'>
          <div className='flex flex-col gap-1 mt-4 ml-10 '>
            <div>
              <AccountBalanceIcon />
            </div>
            <div className='text-lg font-semibold font-poppins'>Total Cash: </div>
            <div className='font-bold text-green-500 text-md font-Poppins'>$ {netCash}</div>
          </div>
          <div className='flex flex-col mt-10 mr-10 '>
            <div className='pl-4 mt-2 '><ProgressCircle progress={0.2} size={20}/></div>
            <div className='text-sm text-green-400'>+14.9%</div>
          </div>
          
        </div>
        <div className='flex justify-between col-span-4 text-white bg-dashboardPrimary'>
          <div className='flex flex-col gap-1 mt-4 ml-10'>
            <div>
              <PaidIcon />
            </div>
            <div className='text-lg font-semibold font-poppins'>Total Income: </div>
            <div className='font-bold text-green-500 text-md font-Poppins'>$ {totalIncome()}</div>
          </div>
          <div className='flex flex-col mt-10 mr-10 '>
            <div className='pl-4 mt-2 '><ProgressCircle progress={0.9} size={20}/></div>
            <div className='text-sm text-green-400'>+10.0%</div>
          </div>
        </div>
        <div className='flex justify-between col-span-4 text-white bg-dashboardPrimary'>
          <div className='flex flex-col gap-2 mt-4 ml-10'>
            <div>
              <PaymentIcon />
            </div>
            <div className='text-lg font-semibold font-poppins'>Total Expense: </div>
            <div className='font-bold text-red-500 text-md font-Poppins'>$ {totalExpenses()}</div>
          </div>
          <div className='flex flex-col mt-10 mr-10 '>
            <div className='pl-4 mt-2 '><ProgressCircle progress={0.5} size={20}/></div>
            <div className='text-sm text-green-400'>+20.1%</div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className='flex flex-col h-full col-span-8 row-span-2 gap-4 text-white bg-dashboardPrimary'>
          <div className='flex justify-between'>
            <div className="flex flex-col gap-2 mt-4 ml-2">
              <div className='text-lg font-Poppins'>Revenue Generated: </div>
              {(totalIncome()-totalExpenses() > 0) ? (<div className='font-bold text-green-500 font-Poppins'>$ {totalIncome()-totalExpenses()}</div>) 
              : (<div className='font-bold text-red-500 font-Poppins'>$ {totalExpenses()-totalIncome()}</div>)} 
              
            </div>
            <div>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </div>
          </div>

          <div className='bg-white'>
            <Chart />
          </div>
        </div>
        <div className='flex flex-col col-span-4 row-span-3 gap-5 overflow-auto bg-dashboardPrimary'>
          <div className='flex mt-2 ml-2 text-lg text-white align-center font-Poppins '>
            Recent transactions
          </div>
          <div className='flex flex-col gap-10 text-white'>
          <div>
            <div className='pl-2 text-green-500 font-Poppins text-md'>Incomes</div>
            <div className='flex justify-between px-2 py-1'>
              <div>Title</div>
              <div>Amount</div>
              <div>Category</div>
            </div>
            {...incomes.map((item) => 
              <div className='flex justify-between h-auto p-2 text-white bg-gray-600 border border-black'>
                <div className='w-10'>{item.title}</div>
                <div className='text-green-400'>$ {item.amount}</div>
                <div className='capitalize'>{item.category}</div>
              </div>
            )}
          </div>
          <div>
            <div className='pl-2 text-red-500 font-Poppins text-md'>Expenses</div>
            <div className='flex justify-between px-2 py-1'>
              <div>Title</div>
              <div>Amount</div>
              <div>Category</div>
            </div>
            {...expenses.map((item) => 
              <div className='flex justify-between h-auto p-2 text-white bg-gray-600 border border-black'>
                <div className='w-10'>{item.title}</div>
                <div className='text-red-400'>{item.amount}</div>
                <div className='capitalize'>{item.category}</div>
              </div>
            )}
          </div>
          </div>
            
              
        </div>
      </Box>

        {/* ROW 3 */}
        <Box className="mt-5" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
          <div className='flex flex-col col-span-4 text-white bg-dashboardPrimary'>
            <div className='mt-2 ml-4 font-Poppins'>Maximum Income: </div>
            <div className='ml-8 font-semibold text-green-500 font-Poppins'> ${Math.min(...incomes.map(item => item.amount))} </div> 
            <div className='mt-2 ml-4 font-Poppins'>Minimum Income: </div>
            <div className='ml-8 font-semibold text-green-500 font-Poppins'> ${Math.max(...incomes.map(item => item.amount))} </div>         
          </div>
          
          <div className='flex flex-col col-span-4 text-white bg-dashboardPrimary'>
            <div className='mt-2 ml-4 font-Poppins'>Maximum Expense: </div>
            <div className='ml-8 font-semibold text-red-500 font-Poppins'> ${Math.min(...expenses.map(item => item.amount))} </div>         
            <div className='mt-2 ml-4 font-Poppins'>Minimum Expense: </div>
            <div className='ml-8 font-semibold text-red-500 font-Poppins'> ${Math.max(...expenses.map(item => item.amount))} </div> 
          </div>

          <div className='flex flex-col col-span-4 text-white bg-dashboardPrimary'>
            <div className='mt-2 ml-4 font-Poppins'>Net Cashflow</div>
            <div>{(totalIncome() > totalExpenses()) ? (<div className='mt-2 ml-4 font-semibold text-green-500 font-Poppins'>You have a net Positive cashflow, which is a good sign!</div>)
             : (<div className='mt-2 ml-4 font-semibold text-red-500 font-Poppins'>You have a net negative cashflow and will be bankrupt soon!</div>) }</div>         
          </div>

        </Box>
        
        
      </Box>
    </Box>
    
  )
}

export default DashboardHome



{/*

<Box backgroundColor="red" className="w-full text-white">
              <div>
                Revenue Generated
              </div>
              <div>
                $59,342.32
              </div>
            </Box>
            <Box backgroundColor="orange" className="">
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          
*/}