import React from 'react'
import './index.scss'

const Input = ({type,placeholder,name,value,onChange,onBlur}) => {
  return (
    <div>
        <input 
        className='input' 
        type={type} 
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        />
    </div>
  )
}

export default Input