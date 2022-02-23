import React from 'react'
import './AddBtn.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const AddBtn = () => {
  const [open, setOpen] = useState(false)

  const toggle=()=>{
      setOpen(!open)
}   

return (    
    <div>
      {
         (open===false)?<button className='add_btn' onClick={toggle}>Добавить</button>:
         <button className='add_info' onClick={toggle}>
            <h3>Добавить</h3>
            <p><NavLink to="/">Товары</NavLink></p>
            <p><NavLink to="/">Категорию</NavLink></p>
            <p><NavLink to="/">Сотрудники</NavLink></p>
         </button>
      }
    </div>
  )
}

export default AddBtn;