import React from 'react'
import { NavLink } from 'react-router-dom'
export const StaffBtn = () => {
  return (
    <div className='staff'>
        <div className="staff_btn"><NavLink to="/OrdersRoute/NewOrders">Новые заказы</NavLink></div>
        <div className="staff_btn"><NavLink to="/OrdersRoute/ProcessedOrders">Обработанные</NavLink></div>
    </div>
  )
}
