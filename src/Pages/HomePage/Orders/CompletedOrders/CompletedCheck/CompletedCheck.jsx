import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
export const CompletedCheck = () => {
  return (
    <div className='order_check'>
        <div className='check_color'>
            <AiOutlineCheck/>
        </div>
        <div className='check_№'>
            <h3>№</h3>
        </div>
        <div className='check_id'>
            <h3>id</h3>
        </div>
        <div className='check_time'>
            <h3>Время</h3>
        </div>
        <div className='check_number'>
            <h3>Номер</h3>
        </div>
        <div className='check_name'>
            <h3>Имя</h3>
        </div>
        <div className='check_adres'>
            <h3>Адрес</h3>
        </div>
    </div>
  )
}
