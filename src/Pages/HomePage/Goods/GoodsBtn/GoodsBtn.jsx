import React from 'react'
import { NavLink } from 'react-router-dom'
import './GoodsBtn.scss'
export const GoodsBtn = () => {
  return (
    <div className='goods'>
       <div className="goods_btn"><NavLink to="/GoodsRoute/GoodsAll">Все растения</NavLink></div>
    </div>
  )
}
