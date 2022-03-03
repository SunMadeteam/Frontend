import React from 'react'
import './index.scss'
import HelloText from '../../common/components/Hello-text'
import TitleEighteen from './../../common/components/Title-eighteen/index';
import WideWhiteButton from '../../common/components/Wide-white-button';

const SelectDateTime = () => {
  return (
    <div className='select-date-time container'>
        <HelloText/>
        <TitleEighteen title={'Дата'}/>
        <input type="number" 
            placeholder='число, месяц*'
        />
        <TitleEighteen title={'Время'}/>
        <div className="flex select-date-time__time">
           <input type="number" />
           <input type="number" />
           <span>:</span>
           <input type="number" />
           <input type="number" />
        </div>
        <WideWhiteButton word={'OK'}/>

    </div>
  )
}

export default SelectDateTime