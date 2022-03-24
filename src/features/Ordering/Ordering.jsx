import React, { useEffect, useState } from 'react'
import Header from '../../common/components/Header';

import './index.scss'

import WideWhiteButton from '../../common/components/Wide-white-button';
import WideButton from '../../common/components/Wide-button';

const Ordering = () => {
  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [addres, setAdress] = useState('')
  const [errorAddres, setErrorAddres] = useState('Адрес не может быть пустым')
  const [addresDirty, setAddresDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [telefoneDirty, setTelefoneDirty] = useState(false)
  const [errorName, setErrorName] = useState('Имя не может быть пустым')
  const [errorTel, setErrorTelefone] = useState('введите номер телефона')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (errorName || errorTel || errorAddres) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [errorName, errorTel,errorAddres])

 
  const blurToggle = (e) => {
    if (e.target.name === 'name') {
      setNameDirty(true)
    }
    else if (e.target.name === 'telefone') {
      setTelefoneDirty(true)
    }else if(e.target.name === 'addres'){
      setAddresDirty(true)
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

  const changeAddres = (e) => {
    setAdress(e.target.value)
    if (!e.target.value) {
      setErrorAddres('Адрес не может быть пустым')
    } else {
      setErrorAddres('')
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
          className={(errorName && nameDirty) ?'input input_error ': (!errorName ) ? 'input input_green' : 'input'}
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

        {(errorAddres && addresDirty) && <div className='errorTelefone'>{errorAddres}</div>}

        <input 
          value={addres}
          name='addres'
          className={(errorAddres && addresDirty) ?'input input_error ': (!errorAddres ) ? 'input input_green' : 'input'}
          placeholder='Адрес'
          onBlur={(e) => blurToggle(e)}
          onChange={(e)=>changeAddres(e)}
        />
        <div className='ordering__payment'>Опата наличными при получении</div>

        <WideButton word='ОФОРМИТЬ ЗАКАЗ' />
        {/* <WideWhiteButton word='ОФОРМИТЬ ЗАКАЗ' disabled={!formValid} /> */}
      </div>
    </div>
  )
}

export default Ordering;
