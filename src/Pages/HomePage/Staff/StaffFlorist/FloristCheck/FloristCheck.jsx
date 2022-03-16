import React from 'react'
import './FloristCheck.scss'
export const FloristCheck = () => {
  return (
    <div className='florist_check'>
        <div className='check_№'>
            <h3>№</h3>
        </div>
        <div className='check_name'>
            <h3>Имя</h3>
        </div>
        <div className='check_number'>
            <h3>Номер</h3>
        </div>
        <div className='check_salary'>
            <h3>Зп/мес.</h3>
        </div>
        <div className='check_order'>
            <h3>Заказ/мес</h3>
        </div>
        <div className='check_goto'>
            <h3>Перейти к зп</h3>
        </div>

    </div>
  )
}
