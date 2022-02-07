import './index.scss';
import BackButton from './../Back-button/index';
import RegistrationTitle from '../Registration-title';
import WideTransparentButton from '../Wide-transparent-button';

const Registration = () => {
  return (
    <div className='registration container'>
     <BackButton />
     <RegistrationTitle 
      title = "Регистрация"
      underTitle = "Для входа в избранное и лич. кабинет вам необходимо зарегистрироваться"/>
      <input placeholder='Имя*' type='text' />
      <input placeholder='Номер*' type='number' />
      <WideTransparentButton number="ПРОДОЛЖИТЬ" />
    </div>
  )
}

export default Registration;