import React from 'react'
import Navigation from '../../Components/Dashboard/Navigation'
import DashboardHome from '../../Components/Dashboard/DashboardHome'

function Dashboard() {
  return (
    <div className='flex'>
        <Navigation />
        <DashboardHome />
    </div>

  )
}

export default Dashboard