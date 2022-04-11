import './index.scss';
import right from './img/right.svg';
import HelloText from './../../common/components/Hello-text/index';
import Input from './../../common/components/Input/Input';
import { deleteUser, signOut, updateProfile } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../../useAuth';
import { useEffect, useState } from 'react';

const PersonalArea = () => {
  const auth = getAuth()
  const {user} = useAuth()
  const [number , setNumber] = useState(user.phonenumber)
  const [showModal , setShowModal] = useState(true)

  console.log(auth.currentUser)


  const validateDelete = (e) => {
    e.preventDefault()
    setShowModal(true)
    deleteUser(auth.currentUser)
   
  }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div className = 'personal_area container' >
      <HelloText />
      <Input type='text' placeholder ='Имя' direct="name"/>
      <Input type='number' placeholder ='Телефон' direct="number" number={number}/>
      <div className='personal_buttons'>
        <div className='history'>
          <p>История заказов</p>
            <div className='count'>2</div>
            <img src={right} alt='' />
        </div>
      </div>
      <div className='personal_buttons'>
        <div className='history'>
          <p>О нас</p>
          <img src={right} alt='' />
        </div>
      </div>
      <div className='personal_buttons'>
        <div className='history'>
          <Link to="/registration" onClick={(e) =>  validateDelete(e)}>Удалить  профиль</Link>
        </div>
      </div>
    </div>
  )
}

export default PersonalArea;