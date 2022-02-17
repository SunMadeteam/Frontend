import React from 'react'
import "./OrdersBtn.css"
import { NavLink, Routes } from 'react-router-dom'
export const OrdersBtn = () => {
  return (
    <div className='orders'>
            <div className="orders_btn"><NavLink to="/OrdersRoute/NewOrders">Новые заказы</NavLink></div>
            <div className="orders_btn"><NavLink to="/OrdersRoute/ProcessedOrders">Обработанные</NavLink></div>
            <div className="orders_btn"><NavLink to="/OrdersRoute/CompletedOrders">Завершенные</NavLink></div>
    </div>
  )
}
