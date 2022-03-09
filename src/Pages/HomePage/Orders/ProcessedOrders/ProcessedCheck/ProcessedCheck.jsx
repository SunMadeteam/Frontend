import React from 'react'
import './ProcessedCheck.scss'
export const ProcessedCheck = () => {
  return (
    <div className='processed_check'>
        <div className='check_№'>
            <h3>№</h3>
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
        <div className='check_status'>
            <div className='ball ball_1'>1</div>
            <div className='ball ball_2'>2</div>
            <div className='ball ball_3'>3</div>
            <div className='ball ball_4'>4</div>
            <div className='ball ball_5'>5</div>
        </div>
</div>
  )
}
