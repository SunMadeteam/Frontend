import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.scss"
export const Menu = () => {
  return (
    <div className='menu_wrapper'>
        <p className='logo'>SunMade</p>
        <div className='menu_flex'>
            <button className='menu_buttons color'><NavLink to="/OrdersRoute/NewOrders">Заказы</NavLink></button>
            <button className='menu_buttons'><NavLink to="/GoodsRoute/GoodsAll">Товары</NavLink></button>
            <button className='menu_buttons'><NavLink to="/StatisticsRoute">Статистика</NavLink></button>
            <button className='menu_buttons'><NavLink to="/StaffRoute/StaffCourier">Сотрудники</NavLink></button>
            <button className='menu_buttons'><NavLink to="/AboutUsRoute/AboutUsContact">О нас</NavLink></button>
        </div>
    </div>
  )
}
