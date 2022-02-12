import './index.scss';
import RegistrationTitle from "../../common/components/Registration-title";
import WideWhiteButton from '../../common/components/Wide-white-button';

const Authorization = () => {
  return (
    <div className="registration container">
      <RegistrationTitle 
      title = "Вход" 
      underTitle = "Добро пожаловать!"
      />
      <input placeholder='Номер*' type='number' />
      <input placeholder='Пароль*' type='password' />
      <WideWhiteButton word="ВОЙТИ"/>
    </div>
  )
}

export default Authorization;