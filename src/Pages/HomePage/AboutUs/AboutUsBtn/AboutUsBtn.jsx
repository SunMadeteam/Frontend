import React from 'react'
import { NavLink } from 'react-router-dom'
import './AboutUsBtn.scss'
export const AboutUsBtn = () => {
  return (
    <div className='about_us'>
        <div className="about_btn"><NavLink to="/AboutUsRoute/AboutUsContact">Контакты</NavLink></div>
    </div>
  )
}
