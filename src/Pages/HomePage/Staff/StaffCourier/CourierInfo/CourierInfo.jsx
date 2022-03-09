import React,{useEffect, useState} from 'react'
import './CourierInfo.scss'
import { ModalAdd } from '../../../AddBtn/ModalAdd/ModalAdd'
import { ThreeDots } from '../../StaffFlorist/ThreeDots/ThreeDots'
import { AddInfo } from '../../../AddBtn/AddInfo/AddInfo'
import {AiOutlineEye} from "react-icons/ai"
import {RiEyeCloseLine} from "react-icons/ri"
import { BranchModal } from '../../StaffAdmin/BranchModal/BranchModal'
import { SalaryModal } from '../../StaffAdmin/SalaryModal/SalaryModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff } from '../../../../../Store/AsyncAction/loginAsync'

export const CourierInfo = () => {
    const [eyeOpen, setEyeOpen] = useState(false)
  
    const foggle=()=>{
        setEyeOpen(!eyeOpen)
    } 
const [modalActive, setModalActive] = useState(false)
const dispatch = useDispatch()
const staff = useSelector(state => state.Staff.staff)
// dispatch(fetchStaff())
useEffect(()=>{
    dispatch(fetchStaff())
},[])
console.log(fetchStaff())
return (
      <div>
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>1</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>2</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>3</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>4</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>5</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>6</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>7</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>8</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
  
        <div className='courier_all'>
          <div className='courier_info' onClick={()=>setModalActive(true)}>
              <div className='info_№'>
                  <h4>9</h4>
              </div>
              <div className='info_name'>
                  <h4>Леонид Якубович</h4>
              </div>
              <div className='info_number'>
                  <h4>+996 505 614 949</h4>
              </div>
              <div className='info_salary'>
                  <h4>21 000 c</h4>
              </div>
              <div className='info_order'>
                  <h4>98</h4>
              </div>
              </div>
              <ThreeDots/>
        </div>    
            <ModalAdd active={modalActive} setActive={setModalActive}>
            <div className='staff_modal'>
            <h2>Данные сотрудника</h2>
            <form className='modal_form'> 
                <label className="modal_label label_margin">Имя</label>
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
            <div><AddInfo/></div>
             <div className='status'> 
                  <h3>Статус</h3>
                  <input type="checkbox"></input>
             </div>
             <BranchModal/>
                <button className="modal_button"> ДОБАВИТЬ </button>
            </form>
        </div>  
           </ModalAdd>
      </div>
    )
}
