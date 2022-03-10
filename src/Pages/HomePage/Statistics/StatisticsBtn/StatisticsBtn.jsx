import React from 'react'
import { NavLink } from 'react-router-dom'
export const StatisticsBtn = () => {
  return (
    <div className='statistics'>
        <div className="statistics_btn"><NavLink to="/HomePage/OrdersRoute/NewOrders">Новые заказы</NavLink></div>
        <div className="statistics_btn"><NavLink to="/HomePage/OrdersRoute/ProcessedOrders">Обработанные</NavLink></div>
    </div>
  )
}
