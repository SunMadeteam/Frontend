import React from 'react'
import { NavLink } from 'react-router-dom'
import { MainDecor } from './MainDecor/MainDecor'
import { MainFooter } from './MainFooter/MainFooter'
import { Header } from './MainHeader/Header'
import { MainMission } from './MainMission/MainMission'
import { MainSection } from './MainSection/MainSection'

export const MainPage = () => {
  return (
    <div className='container'>
        <Header/>
        <MainMission/>
        <MainSection/>
        <MainDecor/>
        <MainFooter/>
        <NavLink to="/HomePage">Дом стр</NavLink>
    </div>
  )
}
