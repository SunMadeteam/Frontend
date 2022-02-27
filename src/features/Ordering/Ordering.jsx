import React, { useEffect, useState } from 'react'
import Header from '../../common/components/Header';

import './index.scss'
import Input from './../../common/components/Input/Input';
import WideWhiteButton from '../../common/components/Wide-white-button';

const Ordering = () => {
  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [addres, setAdress] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [telefoneDirty, setTelefoneDirty] = useState(false)
  const [errorName, setErrorName] = useState('Имя не может быть пустым')
  const [errorTel, setErrorTelefone] = useState('введите номер телефона')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (errorName || errorTel) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [errorName, errorTel])

 
  const blurToggle = (e) => {
    if (e.target.name === 'name') {
      setNameDirty(true)
    }
    else if (e.target.name === 'telefone') {
      setTelefoneDirty(true)
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
  const changeAdres = (e) => {
    setName(e.target.value)
    if (!e.target.value) {
      setErrorName('Имя не может быть пустым')
    } else {
      setErrorName('')
    }
  }
  const changeTelefone = (e) => {
    setTelefone(e.target.value)
    console.log(e.target.value);
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
  return (
    <div className=' '>
      <Header position={true} />
      <div className="container ordering">
        {(errorName && nameDirty) && <div className='errorTelefone' >{errorName}</div>}

        <input
          type='text'
          placeholder='Имя'
          name='name'
          value={name}
          onChange={(e) => changeName(e)}
          onBlur={(e) => blurToggle(e)}
          className={(errorTel && telefoneDirty) ?'input input_error ': (!errorName ) ? 'input input_green' : 'input'}
        />

        {(errorTel && telefoneDirty) && <div className='errorTelefone'>{errorTel}</div>}

        <input
          placeholder='Телефон'
          name='telefone'
          value={telefone}
          onChange={(e) => changeTelefone(e)}
          onBlur={(e) => blurToggle(e)}
          className={errorTel && telefoneDirty?'input input_error ': !errorTel ? 'input input_green': 'input'}
        />
        <input type="text"
          value={addres}
          className='input'
          placeholder='Адрес'
          onChange={changeAdres}

        />

<WideWhiteButton word='ОФОРМИТЬ ЗАКАЗ' disabled={!formValid} />
      </div>
    </div>
  )
}

export default Ordering;
