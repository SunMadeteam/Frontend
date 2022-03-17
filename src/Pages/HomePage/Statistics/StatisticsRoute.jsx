import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StatisticsBtn } from './StatisticsBtn/StatisticsBtn'
import { BarChart } from './StatisticsChart/BarChart'

export const StatisticsRoute = () => {
  return (
    <div>
        <StatisticsBtn/>
        <Routes>
          {/* <Route path="/BarChart" element={<BarChart/>}/> */}
        </Routes>
    </div>
  )
}
