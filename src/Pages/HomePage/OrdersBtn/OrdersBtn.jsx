import React from 'react'
import "./OrdersBtn.css"
import { Link, Routes } from 'react-router-dom'
export const OrdersBtn = () => {
  return (
    <div className='orders'>
            <button className="orders_btn"><Link to="/NewOrder">Новые заказы</Link></button>
            <button className="orders_btn"><Link to="/ProcessedOrders">Обработанные</Link></button>
            <button className="orders_btn">Завершенные</button>
            <button className="orders_btn">Отмененные</button>
    </div>
    
  )
}
