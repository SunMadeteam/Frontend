import React from 'react'
import './CompletedFilter.scss'
export const CompletedFilter = () => {
  return (
    <div className='completed_filter'>
      <div> <p style={{fontWeight:"bold", fontSize:"20px"}}>Фильтр</p> <div className='filter_icon__img2'></div> </div>
      <div> <p>За день</p> <input type="radio"/> </div>
      <div> <p>За неделю</p> <input type="radio"/> </div>
      <div> <p>За текущий месяц</p> <input type="radio"/> </div>
      <div> <p>За 3 месяца</p> <input type="radio"/> </div>
      <div> <p>За 6 месяцев</p> <input type="radio"/> </div>
    </div>
  )
}
