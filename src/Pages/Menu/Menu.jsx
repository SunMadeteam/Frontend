import React from 'react'
import "./Menu.css"
export const Menu = () => {
  return (
    <div className='menu_wrapper'>
        <p className='logo'>SunMade</p>
        <div className='menu_flex'>
            <button className='menu_buttons color'>Заказы</button>
            <button className='menu_buttons'>Товары</button>
            <button className='menu_buttons'>Статистика</button>
            <button className='menu_buttons'>Сотрудники</button>
            <button className='menu_buttons'>Пользователи</button>
            <button className='menu_buttons'>О нас</button>
        </div>
    </div>
  )
}
