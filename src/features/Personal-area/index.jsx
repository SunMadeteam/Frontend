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
  const [number , setNumber] = useState(user?.phonenumber)
  const [showModal , setShowModal] = useState(true)



  // const validateOut = (e) => {
  //   e.preventDefault()
  //   setShowModal(true)
   
  // }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div>
      {
        auth.currentUser === null ? (
          <div style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',height:'80vh',flexDirection:'column'}}>
            <h1 style={{marginBottom:"30px"}}>You are not registered</h1>
            <img style={{width:'50px'}} src="https://www.pngplay.com/wp-content/uploads/12/Sad-Emoji-No-Background.png"/>
          </div>
        ) : (
          <div className = 'personal_area container' >
            <HelloText />
            <Input type='text' placeholder ='Имя' direct="name" />
            <Input type='number' placeholder ='Телефон' direct="number" number={localStorage.getItem('phone')}/>
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
                <Link to="/auth" onClick={() => signOut(auth.currentUser)}>Выйти из профиля</Link>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PersonalArea;