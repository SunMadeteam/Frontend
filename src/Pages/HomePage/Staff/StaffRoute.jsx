import React from 'react'
import { StaffBtn } from './StaffBtn/StaffBtn'
import {Routes, Route} from 'react-router-dom'
import { StaffCourier } from './StaffCourier/StaffCourier'
import { StaffFlorist } from './StaffFlorist/StaffFlorist'
import { StaffAdmin } from './StaffAdmin/StaffAdmin'
import { DetailedInfoPage } from './DetailedInfoPage/DetailedInfoPage'
export const StaffRoute = () => {
  return (
    <div>
        <StaffBtn/>
        <Routes>
            <Route path="/StaffCourier" element={<StaffCourier/>}/>
            <Route path="/StaffFlorist" element={<StaffFlorist/>}/>
            <Route path='/StaffAdmin' element={<StaffAdmin/>}/>
            <Route path='/DetailedInfoPage' element={<DetailedInfoPage/>}/>
        </Routes>
    </div>
  )
}
