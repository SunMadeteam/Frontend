import React,{useState} from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'
import './SalaryModal.scss'

export const SalaryModal = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
  }   
  return (
    <div className='salary_position'>
        {(open===false)?
            <div className='salary_flex'>
                <h3>Зарплата</h3>  
                <AiOutlineDown onClick={toggle}/>
            </div>
            :
            <div>
                <div className='salary_flex'>
                    <h3>Зарплата</h3>
                    <AiOutlineUp onClick={toggle}/>
                </div>
                <div className='salary_flex1'>
                    <p>За текущий месяц</p>
                    <input type="checkbox"/>
                </div>
                <div className='salary_flex1'>
                    <p>За 3 месяца</p>
                    <input type="checkbox"/>
                </div>
                <div className='salary_flex1'>
                    <p>За 6 месяцев</p>
                    <input type="checkbox"/>
                </div>
            </div>
        } 
    </div>
  )
}
