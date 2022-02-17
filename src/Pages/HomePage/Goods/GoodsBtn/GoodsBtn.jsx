import React from 'react'
import { NavLink } from 'react-router-dom'
export const GoodsBtn = () => {
  return (
    <div className='goods'>
        <div className="goods_btn"><NavLink to="/OrdersRoute/NewOrders">Новые заказы</NavLink></div>
        <div className="goods_btn"><NavLink to="/OrdersRoute/ProcessedOrders">Обработанные</NavLink></div>
    </div>
  )
}
