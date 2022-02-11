import './index.scss';
import BackButton from '../../common/components/Back-button';
import RegistrationTitle from '../../common/components/Registration-title';
import WideWhiteButton from '../../common/components/Wide-white-button';

const Registration = () => {
  return (
    <div className='registration container'>
     <BackButton />
     <RegistrationTitle 
      title = "Регистрация"
      underTitle = "Для входа в избранное и лич. кабинет вам необходимо зарегистрироваться"/>
      <input placeholder='Имя*' type='text' />
      <input placeholder='Номер*' type='number' />
      <input placeholder='Пароль*' type='password' />
      <WideWhiteButton word="ПРОДОЛЖИТЬ"/>
  
    </div>
  )
}

export default Registration;