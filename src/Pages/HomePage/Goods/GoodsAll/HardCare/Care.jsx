import React,{useState} from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import {AiOutlineDown } from 'react-icons/ai'
import './Care.scss'
export const Care = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
  }   
  return (
    <div className='care_position'>
        {(open===false)?
            <div className='care_flex'>
                <h3>Сложность ухода</h3>  
                <div onClick={toggle} className="care_vector__img"></div>
            </div>
            :
            <div>
                <div className='care_flex'>
                    <h3>Сложность ухода</h3>
                    <div onClick={toggle} className="care_vector__img2"></div>
                </div>
                <div className='care_flex1'>
                    <p>Лёгкий</p>
                    <input type="radio"/>
                </div>
                <div className='care_flex1'>
                    <p>Средний</p>
                    <input type="radio"/>
                </div>
                <div className='care_flex1'>
                    <p>Сложный</p>
                    <input type="radio"/>
                </div>
            </div>
        } 
    </div>
  )
}
