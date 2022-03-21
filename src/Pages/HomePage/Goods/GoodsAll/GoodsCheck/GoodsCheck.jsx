import React from 'react'
import './GoodsCheck.scss'
import { GoodsFilter } from '../GoodsFilter/GoodsFilter'

export const GoodsCheck = () => {
    
return (
<div className='goods_check'>
    <div className='check_№'>
        <h3>№</h3>
    </div>
    <div className='check_photo'>
        <h3>Фото</h3>
    </div>
    <div className='check_title'>
        <h3>Название</h3>
    </div>
    <div className='check_category'>
        <h3>Категория</h3>
    </div>
    <div className='check_description'>
        <h3>Описание</h3>
    </div>
   <GoodsFilter/>
</div>
  )
}
