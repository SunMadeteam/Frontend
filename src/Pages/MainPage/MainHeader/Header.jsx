import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const toggle=()=>{
      setOpen(!open)
}
  return (
    <header>
        <div className='header_img'>
          <div className='header_link'>
            <NavLink to=""><p className='header_link__margin'>Заказы</p></NavLink>
            <NavLink to=""><p >Товары</p></NavLink>
            <NavLink to=""><p>Статистика</p></NavLink>
            <NavLink to=""><p className='header_link__margin1'>Сотрудники</p></NavLink>
            <NavLink to=""><p className='header_link__margin2'>О нас</p></NavLink>
            {
              (open===false)?<div className='header_person' onClick={toggle}></div>:
                <div className='person_box'>
                    <h3>Каныкей <div className='header_person1' onClick={toggle}></div></h3>
                    <p>+996 000 123 456</p>
                    <p>Выйти</p>
                </div> 
              }
            
          </div>
            <h2>SunMade</h2>    
        </div>
    </header>
  )
}
