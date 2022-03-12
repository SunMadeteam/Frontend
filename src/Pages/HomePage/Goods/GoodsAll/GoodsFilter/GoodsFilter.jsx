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
      <div className='goods_filter__icon' onClick={toggle}></div>
          :
          <div className='goods_filter'>
          <div> <p>Категории</p> <div className='goods_icon' onClick={toggle}></div> </div>
          <div> <p>Популярные</p> <input type="radio"/> </div>
          <div> <p>Сад</p> <input type="radio"/> </div>
          <div> <p>Дом</p> <input type="radio"/> </div>
          <div> <p>Для подарка</p> <input type="radio"/> </div>
          <div> <p>Почва</p> <input type="radio"/> </div>
          <div> <p>Питание</p> <input type="radio"/> </div>
          <div> <p>Аксессуары</p> <input type="radio"/> </div>
        </div>
   }
 </div>
) 
}
