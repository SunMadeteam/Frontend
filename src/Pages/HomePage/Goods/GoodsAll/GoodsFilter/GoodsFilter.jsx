import React, {useState} from 'react'
import './GoodsFilter.scss'
import {BsFilterRight} from 'react-icons/bs'
export const GoodsFilter = () => {
  const [open, setOpen] = useState(false)

  const toggle=()=>{
      setOpen(!open)
} 
  return (
  <div>
 {
      (open===false)? 
      <div className='filter_icon' onClick={toggle}><BsFilterRight/></div>
          :
          <div className='goods_filter'>
          <div> <p>Категории</p> <div className='goods_icon' onClick={toggle}><BsFilterRight/></div> </div>
          <div> <p>Популярные</p> <input type="checkbox"/> </div>
          <div> <p>Сад</p> <input type="checkbox"/> </div>
          <div> <p>Дом</p> <input type="checkbox"/> </div>
          <div> <p>Для подарка</p> <input type="checkbox"/> </div>
          <div> <p>Почва</p> <input type="checkbox"/> </div>
          <div> <p>Питание</p> <input type="checkbox"/> </div>
          <div> <p>Аксессуары</p> <input type="checkbox"/> </div>
        </div>
   }
 </div>
) 
}
