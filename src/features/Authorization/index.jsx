import './index.scss';
import RegistrationTitle from "../../common/components/Registration-title";
import WideWhiteButton from '../../common/components/Wide-white-button';
import { Link } from 'react-router-dom';

const Authorization = () => {
  return (
    <div className="registration container">
      <RegistrationTitle 
      title = "Вход" 
      underTitle = " "
      />
      <input placeholder='Номер*' type='number' />
      <input placeholder='Пароль*' type='password' />
      
      <div className='enter'>
        <Link to="/">
          <WideWhiteButton word="ВОЙТИ"/>
        </Link>
      </div>
      
      
    </div>
  )
}

export default Authorization;