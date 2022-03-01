import React,{useState} from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import {AiOutlineDown } from 'react-icons/ai'
import './Category.scss'
export const Category = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
  }   
  return (
    <div className='category_position'>
    {(open===false)?
        <div className='category_flex'>
            <h3>Категории</h3>  
            <AiOutlineDown onClick={toggle}/>
        </div>
        :
        <div>
            <div className='category_flex'>
                <h3>Категории</h3>
                <AiOutlineUp onClick={toggle}/>
            </div>
            <div className='category_flex1'>
                <p>Популярные</p>
                <input type="checkbox"/>
            </div>
            <div className='category_flex1'>
                <p>Сад</p>
                <input type="checkbox"/>
            </div>
            <div className='category_flex1'>
                <p>Дом</p>
                <input type="checkbox"/>
            </div>
            <div className='category_flex1'>
                <p>Для подарка</p>
                <input type="checkbox"/>
            </div>
            <div className='category_flex1'>
                <p>Почта</p>
                <input type="checkbox"/>
            </div>
            <div className='category_flex1'>
                <p>Питание</p>
                <input type="checkbox"/>
            </div>
            <div className='category_flex1'>
                <p>Аксессуары</p>
                <input type="checkbox"/>
            </div>

        </div>
    } 
</div>
  )
}
