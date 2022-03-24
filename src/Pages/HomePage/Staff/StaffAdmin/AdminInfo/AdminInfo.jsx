import React,{useState} from 'react'
import './AdminInfo.scss'
import { ModalAdd } from '../../../AddBtn/ModalAdd/ModalAdd'
import { ThreeDots } from '../../StaffFlorist/ThreeDots/ThreeDots'
import {AiOutlineEye} from "react-icons/ai"
import {RiEyeCloseLine} from "react-icons/ri"
import { AddStaff } from '../../../AddBtn/AddStaff/AddStaff'
import { BranchModal } from '../BranchModal/BranchModal'
import { SalaryModal } from '../SalaryModal/SalaryModal'
import { PositionModal } from '../PositionModal/PositionModal'

export const AdminInfo = () => {
  const [eyeOpen, setEyeOpen] = useState(false)
  
  const foggle=()=>{
      setEyeOpen(!eyeOpen)
  }   
const [modalActive, setModalActive] = useState(false)
    return (
      <div className='staff_global'>
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>1</h4>
              </div>
              <div className='info_name'>
                  <h4>Путин Чёрт</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 000 000 000</h4>
              </div>
              <div className='info_salary'>
                  <h4>00 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>00</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>2</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>3</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>4</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>5</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>6</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>7</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>8</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='admin_all'>
          <div className='admin_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>9</h4>
              </div>
              <div className='info_name'>
                  <h4>Сергей Карпов</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 999 543 444</h4>
              </div>
              <div className='info_salary'>
                  <h4>55 321</h4>
              </div>
              <div className='info_order'>
                  <h4>10</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
    <ModalAdd active={modalActive} setActive={setModalActive}>
        <div className='staff_modal'>
            <h2>Данные сотрудника</h2>
            <form className='modal_form'> 
                <label className="label_margin">Имя</label>
                    <input className="modal_input modal_input_login" 
                    placeholder="Введите имя и фамилию"
                    />
                <label className="modal_label">Номер</label>
                <input className="modal_input modal_input_login" 
                    placeholder="Введите номер"
                    />
                <label className="modal_label">Пароль</label>

                    <input className="modal_input "
                    placeholder="Введите пароль"
                    type={(eyeOpen===false)?"password":"text"}/>
                <div className="modal_eye">
                    {
                    (eyeOpen===false)?<RiEyeCloseLine onClick={foggle}/>:
                    <AiOutlineEye onClick={foggle}/>
                    }
                </div>
        <div><PositionModal/></div>
             <div className='status'> 
                  <h3>Статус</h3>
                  <input type="radio"></input>
             </div>
             <BranchModal/>
          
                <button className="modal_button"> ДОБАВИТЬ </button>
            </form>
        </div>      
    </ModalAdd>
      </div>
    )
}
