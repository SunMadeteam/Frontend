import React from 'react'
import { NavLink } from 'react-router-dom'
import './AboutUsBtn.scss'
export const AboutUsBtn = () => {
  const setSecondActive=({isActive})=>isActive?'secondActive_btn__link':'second_btn__link';
  return (
    <div className='about_us'>
        <NavLink to="/AboutUsRoute/AboutUsContact" className={setSecondActive}><p>Контакты</p></NavLink>
    </div>
  )
}
