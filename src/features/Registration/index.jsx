import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import BackButton from '../../common/components/Back-button';
import RegistrationTitle from '../../common/components/Registration-title';
import WideWhiteButton from '../../common/components/Wide-white-button';
import { useEffect, useState } from 'react';
import { RecaptchaVerifier,  signInWithPhoneNumber ,getAuth } from "firebase/auth";

const Registration = () => {

  const REGISTER_CLIENT = 'https://sunmadebackend.herokuapp.com/api1/v1/register/'
  const code = '+996'
  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState(code)
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('Пароль больше 3 меньше 8 символов')
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [telefoneDirty, setTelefoneDirty] = useState(false)
  const [errorName, setErrorName] = useState('Имя не может быть пустым')
  const [errorTel, setErrorTelefone] = useState('введите номер телефона')
  const [formValid, setFormValid] = useState(false)
  const auth = getAuth()
  const navigate = useNavigate()
  function generateRecatcha(){
    window.recaptchaVerifier = new RecaptchaVerifier('recatcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }


  const handleLogin = (e) => {
     if(telefone.length >= 12){
      generateRecatcha()    
      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(auth, telefone , appVerifier )
      .then(confirms =>{
        console.log(confirms)
        window.confirmationResult = confirms 
        navigate('/confirmation')
      }).catch((error) => {
        console.log(error)
      });
     }
    localStorage.setItem('phone' , telefone)
  }

  return (
    <div className='registration container'>
      <Link to='/'> {<BackButton />} </Link>
      <RegistrationTitle
        title="Регистрация"
        underTitle="Для входа в избранное и лич. кабинет вам необходимо зарегистрироваться" />
        <div id="recatcha"></div>
      {(errorName && nameDirty) && <div className='errorTelefone' >{errorName}</div>}
      <input
        type='text'
        placeholder='Имя*'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)}

        className={(errorName && nameDirty) ? 'input input_error ' : (!errorName) ? 'input input_green' : 'input'}
      />

      {(errorTel && telefoneDirty) && <div className='errorTelefone'>{errorTel}</div>}

      <input
        type='text'
        placeholder='Номер*'
        name='telefone'
        value={telefone}
        onChange={e => setTelefone(e.target.value)}
        className={errorTel && telefoneDirty ? 'input input_error ' : !errorTel ? 'input input_green' : 'input'}
      />

      {(errorPassword && passwordDirty) && <div className='errorTelefone'>{errorPassword}</div>}

      <input
        placeholder='Пароль*'
        name='password'
        onChange={e => setPassword(e.target.value)}
        type='password'
        value={password}
        className={errorPassword && telefoneDirty ? 'input input_error ' : !errorPassword ? 'input input_green' : 'input'}

      />
      <button onClick={handleLogin} className='btnReg'>ПРОДОЛЖИТЬ</button>
    </div>
  )
}

export default Registration;