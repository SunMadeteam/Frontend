import React from 'react'
import './index.scss'

const Input = ({type,placeholder}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Input