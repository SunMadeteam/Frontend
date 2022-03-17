import React from 'react'
import { NavLink } from 'react-router-dom'
import './StatisticsBtn.scss'

export const StatisticsBtn = () => {
  const setSecondActive=({isActive})=>isActive?'secondActive_btn__link':'second_btn__link';
  return (
    <div className='statistics'>
      <NavLink to="/HomePage/StatisticsRoute/BarChart" className={setSecondActive}><p>Статистика</p></NavLink>
    </div>
  )
}
