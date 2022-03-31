import './index.scss';
import right from './img/right.svg';
import HelloText from './../../common/components/Hello-text/index';
import Input from './../../common/components/Input/Input';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const PersonalArea = () => {
  const auth = getAuth()
  const signOutUser = () =>{
    signOut(auth)
  }
  
  return (
    <div className = 'personal_area container'>
      <HelloText />
      <Input type='text' placeholder ='Имя'/>
      <Input type='number' placeholder ='Телефон'/>
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
          <p onClick={signOutUser}>Выйти из профиля</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalArea;