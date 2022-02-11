import React from 'react'
import "./OrdersBtn.css"
import { NavLink, Routes } from 'react-router-dom'
export const OrdersBtn = () => {
  return (
    <div className='orders'>
            <button className="orders_btn"><NavLink to="/NewOrders">Новые заказы</NavLink></button>
            <button className="orders_btn"><NavLink to="/ProcessedOrders">Обработанные</NavLink></button>
            <button className="orders_btn"><NavLink to="/CompletedOrders">Завершенные</NavLink></button>
            <button className="orders_btn"><NavLink to="/CanceledOrders">Отмененные</NavLink></button>
    </div>
  )
}
