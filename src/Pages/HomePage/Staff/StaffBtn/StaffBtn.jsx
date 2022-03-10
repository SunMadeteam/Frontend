import React from 'react'
import { NavLink } from 'react-router-dom'
import './StaffBtn.scss'

export const StaffBtn = () => {
  const setActive=({isActive})=>isActive?'active_btn__link':'btn_link';
  const setSecondActive=({isActive})=>isActive?'secondActive_btn__link':'second_btn__link';
  return (
    <div className='staff'>
      <div className='staff_route'>
          <NavLink to="/HomePage/StaffRoute/StaffCourier" className={setSecondActive}><p>Курьер</p></NavLink>
          <NavLink to="/HomePage/StaffRoute/StaffFlorist" className={setActive}><p>Флорист</p></NavLink>
          <NavLink to="/HomePage/StaffRoute/StaffAdmin" className={setActive}><p>Админ</p></NavLink>
      </div>
      <div className='staff_status'>
          <div className='staff_active'><p>Активен</p></div>
          <div className='staff_unactive'><p>Не активен</p></div>
      </div>
    </div>
  )
}
