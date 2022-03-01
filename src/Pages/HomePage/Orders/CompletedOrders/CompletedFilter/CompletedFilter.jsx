import React from 'react'
import './CompletedFilter.scss'
import {BsFilterRight} from 'react-icons/bs'
export const CompletedFilter = () => {
  return (
    <div className='completed_filter'>
      <div> <p>За день</p> <div className='completed_icon'><BsFilterRight/></div> </div>
      <div> <p>За неделю</p> <input type="checkbox"/> </div>
      <div> <p>За месяц</p> <input type="checkbox"/> </div>
      <div> <p>За 3 месяца</p> <input type="checkbox"/> </div>
      <div> <p>За 6 месяцев</p> <input type="checkbox"/> </div>
    </div>
  )
}
