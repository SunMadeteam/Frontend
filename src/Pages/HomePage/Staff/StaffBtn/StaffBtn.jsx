import React from 'react'
import { NavLink } from 'react-router-dom'
import './StaffBtn.scss'

export const StaffBtn = () => {
  return (
    <div className='staff'>
      <div className='staff_route'>
          <div className="staff_btn"><NavLink to="/StaffRoute/StaffCourier">Курьер</NavLink></div>
          <div className="staff_btn"><NavLink to="/StaffRoute/StaffFlorist">Флорист</NavLink></div>
          <div className="staff_btn"><NavLink to="/StaffRoute/StaffAdmin">Админ</NavLink></div>
      </div>
      <div className='staff_status'>
          <div className='staff_active'><p>Активен</p></div>
          <div className='staff_active'><p>Не активен</p></div>
      </div>
    </div>
  )
}
