import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainSection.scss'

export const MainSection = () => {
  return (
    <section className='main_section'>
        <h2>Разделы</h2>
        <div className='main_section__flex'>
            <div className='main_section__box'>
                <h3>Заказы</h3>
                <p>В данном разделе отображаются все новые, обработанные и завершенные заказы</p>
                <div className='section_box__link'>
                  <NavLink to="/HomePage/OrdersRoute/NewOrders" ><span>ПЕРЕЙТИ</span></NavLink>
                </div>
            </div>
            <div className='main_section__box'>
            <h3>Товары</h3>
                <p>Раздел “товары” содержит в себе информацию о растениях, также их можно редактировать</p>
                <div className='section_box__link'>
                  <NavLink to="/HomePage/GoodsRoute/GoodsAll" ><span>ПЕРЕЙТИ</span></NavLink>
                </div>
            </div>
            <div className='main_section__box'>
            <h3>Статистика</h3>
                <p>Ведется cтатистика о часто покупаемых растениях так же о активности заказов за неделю</p>
                <div className='section_box__link'>
                  <NavLink to="/HomePage/StatisticsRoute" ><span>ПЕРЕЙТИ</span></NavLink>
                </div>
            </div>
            <div className='main_section__box'>
            <h3>Сотрудники</h3>
                <p>Список сотрудников: курьер, флорист, админ. Так же подробная информация о каждом</p>
                <div className='section_box__link'>
                  <NavLink to="/HomePage/StaffRoute/StaffCourier"><span>ПЕРЕЙТИ</span></NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}
