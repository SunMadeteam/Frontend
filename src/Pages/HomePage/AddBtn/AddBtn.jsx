import React from 'react'
import './AddBtn.scss'
import { useState } from 'react'
import {AiOutlineEye} from "react-icons/ai"
import {RiEyeCloseLine} from "react-icons/ri"
import { ModalAdd } from './ModalAdd/ModalAdd'
import { AddInfo } from './AddInfo/AddInfo'
const AddBtn = () => {
  const [open, setOpen] = useState(false)

  const toggle=()=>{
      setOpen(!open)
}   
const [eyeOpen, setEyeOpen] = useState(false)

const foggle=()=>{
    setEyeOpen(!eyeOpen)
}   
const [modalActive, setModalActive] = useState(false)
return (    
    <div className='add_content'>
      {
         (open===false)?<button className='add_btn' onClick={toggle}>Добавить</button>:
         <div className='add_info'>
            <button className='add_revers' onClick={toggle}> <p>Добавить</p> </button>
              <button> <p>Товары</p> </button>
              <button> <p>Категории</p> </button>
              <button onClick={()=>setModalActive(true)}> <p>Сотрудники</p> </button>
          </div>
      }
      <ModalAdd active={modalActive} setActive={setModalActive}>
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
                  (eyeOpen===false)?<div onClick={foggle} className="add_close__eye"/>:
                  <div onClick={foggle} className="add_open__eye"/>
                }
            </div>
           <div className='add_input_pass'><AddInfo/></div>
              <button className="add_button"> ДОБАВИТЬ </button>
          </form>
        </div>      
      </ModalAdd>
    </div>
  )
}

export default AddBtn;