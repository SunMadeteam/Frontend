import React from 'react'
import { NavLink } from 'react-router-dom'
export const AboutUsBtn = () => {
  return (
    <div className='about_us'>
        <div className="about_btn"><NavLink to="/OrdersRoute/NewOrders">Новые заказы</NavLink></div>
        <div className="about_btn"><NavLink to="/OrdersRoute/ProcessedOrders">Обработанные</NavLink></div>
    </div>
  )
}
