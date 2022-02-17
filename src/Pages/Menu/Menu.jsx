import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"
export const Menu = () => {
  return (
    <div className='menu_wrapper'>
        <p className='logo'>SunMade</p>
        <div className='menu_flex'>
            <button className='menu_buttons color'><NavLink to="/OrdersRoute/NewOrders">Заказы</NavLink></button>
            <button className='menu_buttons'><NavLink to="/GoodsRoute">Товары</NavLink></button>
            <button className='menu_buttons'>Статистика</button>
            <button className='menu_buttons'>Сотрудники</button>
            <button className='menu_buttons'>Пользователи</button>
            <button className='menu_buttons'>О нас</button>
        </div>
    </div>
  )
}
