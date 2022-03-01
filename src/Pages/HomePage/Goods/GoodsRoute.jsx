import React from 'react'
import { GoodsBtn } from './GoodsBtn/GoodsBtn'
import { GoodsAll } from './GoodsAll/GoodsAll'
import { Route, Routes } from 'react-router-dom'

export const GoodsRoute = () => {
  return (
    <div>
        <GoodsBtn/>
        <Routes>
            <Route path="/GoodsAll" element={<GoodsAll/>}/>
        </Routes>
    </div>
  )
}
