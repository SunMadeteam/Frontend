import React,{useEffect, useState} from 'react'
import './CourierInfo.scss'
import { ModalAdd } from '../../../AddBtn/ModalAdd/ModalAdd'
import { ThreeDots } from '../../StaffFlorist/ThreeDots/ThreeDots'
import { AddInfo } from '../../../AddBtn/AddInfo/AddInfo'
import {AiOutlineEye} from "react-icons/ai"
import {RiEyeCloseLine} from "react-icons/ri"
import { BranchModal } from '../../StaffAdmin/BranchModal/BranchModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff } from '../../../../../Store/AsyncAction/fetchStaff'
import { NavLink } from 'react-router-dom'


export const CourierInfo = () => {
    const [eyeOpen, setEyeOpen] = useState(false)
  
    const foggle=()=>{
        setEyeOpen(!eyeOpen)
    } 
const [modalActive, setModalActive] = useState(false)
const dispatch = useDispatch()
const staff = useSelector(state => state.Staff.staff)
useEffect(()=>{
    dispatch(fetchStaff())
},[])

staff.map(element => console.log(element))
return (
        <div className='staff_global'>
            {staff.map(element => 
            <div className='courier_all' key={element.id}>
            <div className='courier_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4 key={element.id}>{element.id}</h4>
                </div>
                <div className='info_name'>
                    <h4>{element.name}</h4>
                </div>
                <div className='info_number'>
                    <h4>{element.number}</h4>
                </div>
                <div className='info_salary'>
                    <h4>{element.salary}</h4>
                </div>
                <div className='info_order'>
                    <h4>98</h4>
                </div>
                </div>
                <ThreeDots/>
            </div>    
            )}
            
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