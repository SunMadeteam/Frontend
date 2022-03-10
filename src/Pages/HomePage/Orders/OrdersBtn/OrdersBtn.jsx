import React from 'react'
import "./OrdersBtn.scss"
import { NavLink } from 'react-router-dom'
export const OrdersBtn = () => {
  const setActive=({isActive})=>isActive?'active_btn__link':'btn_link';
  const setSecondActive=({isActive})=>isActive?'secondActive_btn__link':'second_btn__link';
  return (
    <div className='orders'>
        <NavLink to="/HomePage/OrdersRoute/NewOrders" className={setSecondActive}><p>Новые заказы</p></NavLink>
        <NavLink to="/HomePage/OrdersRoute/ProcessedOrders" className={setActive}><p>Обработанные</p></NavLink>
        <NavLink to="/HomePage/OrdersRoute/CompletedOrders" className={setActive}><p>Завершенные</p></NavLink>
    </div>
  )
}
