import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutUsBtn } from './AboutUsBtn/AboutUsBtn'
import { AboutUsContact } from './AboutUsContact/AboutUsContact'

export const AboutUsRoute = () => {
  return (
    <div>
        <AboutUsBtn/>
        <Routes>
          <Route path='/AboutUsContact' element={<AboutUsContact/>}/>
        </Routes>
    </div>
  )
}
