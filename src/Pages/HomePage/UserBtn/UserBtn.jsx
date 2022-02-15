import React,{useState} from 'react'
import './UserBtn.scss'
import {BsPerson} from 'react-icons/bs'
const UserBtn = () => {
  const [open, setOpen] = useState(false)

  const toggle=()=>{
      setOpen(!open)
}
  return (
    <div >
      {
      (open===false)?<button className='user_btn' onClick={toggle}><BsPerson/></button>:
         <button className='user_info' onClick={toggle}>
            <BsPerson/>
            <h3>Каныкей</h3>
            <p>+996 000 123 456</p>
            <p>Выйти</p>
         </button>
        
      }
    </div>
  )
}

export default UserBtn
