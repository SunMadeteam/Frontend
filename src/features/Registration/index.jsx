import { Link } from 'react-router-dom';
import axios from 'axios';

import './index.scss';
import BackButton from '../../common/components/Back-button';
import RegistrationTitle from '../../common/components/Registration-title';
import WideWhiteButton from '../../common/components/Wide-white-button';
import { useEffect, useState } from 'react';

const Registration = () => {

  const REGISTER_CLIENT = 'https://sunmadebackend.herokuapp.com/api1/v1/register/'

  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('Пароль больше 3 меньше 8 символов')
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [telefoneDirty, setTelefoneDirty] = useState(false)
  const [errorName, setErrorName] = useState('Имя не может быть пустым')
  const [errorTel, setErrorTelefone] = useState('введите номер телефона')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (errorName || errorTel || errorPassword) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [errorName, errorTel, errorPassword])


  const blurToggle = (e) => {
    if (e.target.name === 'name') {
      setNameDirty(true)
    }
    else if (e.target.name === 'telefone') {
      setTelefoneDirty(true)
    } else if (e.target.name === 'password') {
      setPasswordDirty(true)
    }
  }

  const changeName = (e) => {
    setName(e.target.value)
    if (!e.target.value) {
      setErrorName('Имя не может быть пустым')
    } else {
      setErrorName('')
    }
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value.length);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setErrorPassword('Пароль больше 3 меньше 8 символов')
      console.log(e.target.value.length);
    } else {
      setErrorPassword('')
    }
  }

  const changeTelefone = (e) => {
    setTelefone(e.target.value)
    const regKG = /^\+\s?996\s?\d{3}\s?\d{3}\s?\d{3}$/g
    if (!e.target.value) {
      setErrorTelefone('Введите номер телефона')

    } else if (!regKG.test(e.target.value)) {
      setErrorTelefone('корректный номер +996 XXX XXX XXX')
    } else if (regKG.test(e.target.value)) {
      setErrorTelefone('')
    } else {
      setErrorTelefone('')
    }
  }

  const registration = async (name, password , telefone) => {
    let number = telefone.replace(/\s/g, '');
    
    try {
      let user = {
        name: name,
        password:password,
        number: number
      };
     
      let response = await fetch('https://sunmadebackend.herokuapp.com/api1/v1/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });
      
    } catch (e) {
      
    }

}

  return (
    <div className='registration container'>
      <Link to='/'> {<BackButton />} </Link>
      <RegistrationTitle
        title="Регистрация"
        underTitle="Для входа в избранное и лич. кабинет вам необходимо зарегистрироваться" />

      {(errorName && nameDirty) && <div className='errorTelefone' >{errorName}</div>}
      <input
        type='text'
        placeholder='Имя*'
        name='name'
        value={name}
        onChange={(e) => changeName(e)}
        onBlur={(e) => blurToggle(e)}
        className={(errorName && nameDirty) ? 'input input_error ' : (!errorName) ? 'input input_green' : 'input'}
      />

      {(errorTel && telefoneDirty) && <div className='errorTelefone'>{errorTel}</div>}

      <input
        placeholder='Номер*'
        name='telefone'
        value={telefone}
        onChange={(e) => changeTelefone(e)}
        onBlur={(e) => blurToggle(e)}
        className={errorTel && telefoneDirty ? 'input input_error ' : !errorTel ? 'input input_green' : 'input'}
      />

      {(errorPassword && passwordDirty) && <div className='errorTelefone'>{errorPassword}</div>}

      <input
        placeholder='Пароль*'
        name='password'
        type='password'
        value={password}
        onChange={(e) => changePassword(e)}
        onBlur={(e) => blurToggle(e)}
        className={errorPassword && telefoneDirty ? 'input input_error ' : !errorPassword ? 'input input_green' : 'input'}

      />
      <WideWhiteButton word="ПРОДОЛЖИТЬ" disabled={!formValid} onClick={()=>registration(name,password,telefone)} />
<button disabled={!formValid} onClick={()=>registration(name, password , telefone)} > click</button>
    </div>
  )
}

export default Registration;