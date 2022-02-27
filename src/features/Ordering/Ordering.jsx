import React from 'react'
import Header from '../../common/components/Header';

import './index.scss'
import Input from './../../common/components/Input/Input';

const Ordering = () => {
  return (
    <div className=' '>
      <Header position={true}/>
      <div className="container ordering">
        <Input type='text' placeholder ='Имя'/>
        <Input type='number' placeholder ='Телефон'/>
        

      </div>
    </div>
  )
} 

export default Ordering;
