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
                <AiOutlineDown onClick={toggle}/>
            </div>
            :
            <div>
                <div className='care_flex'>
                    <h3>Сложность ухода</h3>
                    <AiOutlineUp onClick={toggle}/>
                </div>
                <div className='care_flex1'>
                    <p>Лёгкий</p>
                    <input type="checkbox"/>
                </div>
                <div className='care_flex1'>
                    <p>Средний</p>
                    <input type="checkbox"/>
                </div>
                <div className='care_flex1'>
                    <p>Сложный</p>
                    <input type="checkbox"/>
                </div>
            </div>
        } 
    </div>
  )
}
