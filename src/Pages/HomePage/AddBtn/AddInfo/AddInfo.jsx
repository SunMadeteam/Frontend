import React,{useState} from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'
import './AddInfo.scss'

export const AddInfo = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
  }   
  return (
    <div className='add_position'>
        {(open===false)?
            <div className='add_flex'>
                <h3>Должность</h3>  
                <AiOutlineDown onClick={toggle}/>
            </div>
            :
            <div>
                <div className='add_flex'>
                    <h3>Должность</h3>
                    <AiOutlineUp onClick={toggle}/>
                </div>
                <div className='add_flex1'>
                    <p>Админ</p>
                    <input type="checkbox"/>
                </div>
                <div className='add_flex1'>
                    <p>Курьер</p>
                    <input type="checkbox"/>
                </div>
                <div className='add_flex1'>
                    <p>Флорист</p>
                    <input type="checkbox"/>
                </div>
            </div>
        } 
    </div>
  )
}
