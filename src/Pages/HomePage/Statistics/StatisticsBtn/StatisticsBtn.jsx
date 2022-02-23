import React from 'react'
import { NavLink } from 'react-router-dom'
export const StatisticsBtn = () => {
  return (
    <div className='statistics'>
        <div className="statistics_btn"><NavLink to="/OrdersRoute/NewOrders">Новые заказы</NavLink></div>
        <div className="statistics_btn"><NavLink to="/OrdersRoute/ProcessedOrders">Обработанные</NavLink></div>
    </div>
  )
}
