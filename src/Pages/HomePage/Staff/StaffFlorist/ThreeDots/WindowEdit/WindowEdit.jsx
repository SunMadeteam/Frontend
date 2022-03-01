import React,{useState} from 'react'
import {RiEyeCloseLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import { EditInfo } from './EditInfo/EditInfo'
import "./WindowEdit.scss"

export const WindowEdit = () => {
const [open, setOpen] = useState(false)

const toggle=()=>{
        setOpen(!open)
} 
const [eyeOpen, setEyeOpen] = useState(false)

const foggle=()=>{
    setEyeOpen(!eyeOpen)
}   
  return (
    <div className='window_edit'>
        {
            (open===false)?<p onClick={toggle}>Редактировать</p>
            :
            <div className='add_staff'>
            <h2>Добавить сотрудника</h2>
            <form className='add_form'> 
              <label className="add_label label_margin">Имя/Фамилия</label>
                  <input className="add_input add_input_login" 
                    placeholder="Введите имя и фамилию"
                  />
              <label className="add_label">Номер</label>
                 <input className="add_input add_input_login" 
                    placeholder="Введите номер"
                  />
              <label className="add_label">Пароль</label>
  
                  <input className="add_input "
                    placeholder="Введите пароль"
                    type={(eyeOpen===false)?"password":"text"}/>
              <div className="add_eye">
                  {
                    (eyeOpen===false)?<RiEyeCloseLine onClick={foggle}/>:
                    <AiOutlineEye onClick={foggle}/>
                  }
              </div>
             <div><EditInfo/></div>
             <div className='status'> 
                  <h3>Статус</h3>
                  <input type="checkbox"></input>
             </div>
                <button className="add_button" onClick={toggle}> СОХРАНИТЬ </button>
            </form>
          </div>      
        }
    </div>
  )
}
