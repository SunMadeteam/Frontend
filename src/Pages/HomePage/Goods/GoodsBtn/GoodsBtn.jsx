import React from 'react'
import { NavLink } from 'react-router-dom'
import './GoodsBtn.scss'
export const GoodsBtn = () => {
  const setSecondActive=({isActive})=>isActive?'secondActive_btn__link':'second_btn__link';
  return (
    <div className='goods'>
       <NavLink to="/HomePage/GoodsRoute/GoodsAll" className={setSecondActive}><p>Все растения</p></NavLink>
    </div>
  )
}
