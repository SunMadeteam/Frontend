import React, {useState} from 'react'
import "./ProcessedInfo.scss"
import Text1  from './Text1'
import Text2 from './Text2'
import { Text3 } from './Text3'
import { ModalClient } from '../../Modals/ModalClient/ModalClient'
import { ImPencil } from 'react-icons/im'

const ProcessedInfo = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div> 
        <div className='flex' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>1</h4>
            </div>
            <div className='check_time'>
                <h4>12:42</h4>
            </div>
            <div className='check_number'>
                <h4>+996555333333</h4>
            </div>
            <div className='check_name'>
                <h4>Карина</h4>
            </div>
            <div className='check_adres'>
                <h4>Гагарина 33</h4>
            </div>
            <div className='ball'></div>
         </div>
         <div className='flex' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>2</h4>
            </div>
            <div className='check_time'>
                <h4>12:42</h4>
            </div>
            <div className='check_number'>
                <h4>+996555333333</h4>
            </div>
            <div className='check_name'>
                <h4>Карина</h4>
            </div>
            <div className='check_adres'>
                <h4>Гагарина 33</h4>
            </div>
            <div className='ball'></div>
          </div>

          <div className='flex' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>3</h4>
            </div>
            <div className='check_time'>
                <h4>12:42</h4>
            </div>
            <div className='check_number'>
                <h4>+996555333333</h4>
            </div>
            <div className='check_name'>
                <h4>Карина</h4>
            </div>
            <div className='check_adres'>
                <h4>Гагарина 33</h4>
            </div>
            <div className='ball'></div>
        </div>
        <ModalClient active={modalActive} setActive={setModalActive}>
                <div className='modal_text'>
                    <h3>13</h3>
                    <p>Имя:</p>
                    <p>Карина</p>
                </div>
                <div className='modal_text__number'>
                    <h3>Номер:</h3>
                    <p>+996505614949</p>
                </div>
                <div className='modal_adress'>    
                    <p>Адрес:</p>
                    <input 
                        placeholder='Гагарина 33'
                    />
                    <div className='pencil'><ImPencil/></div>
                </div>

                <div className='modal_goods'>
                    <div className='goods_flex'>
                        <h3 className='goods_№'>№</h3>
                        <h3 className='goods_photo'>Фото</h3>
                        <h3 className='goods_title'>Название</h3>
                        <h3 className='goods_number'>Кол-во</h3>
                        <h3 className='goods_sum'>Сумма</h3>
                        <h3 className='goods_total'>Итог:</h3>
                    </div>
                    <div className='goods_content'>
                        <p className='content_№'>1</p>
                        <div className='img_1'></div>
                        <p className='content_title'>Монстера</p>
                        <p className='content_number'>3</p>
                        <p>8400</p>
                    </div>
                    <div className='goods_content'>
                        <p className='content_№'>2</p>
                        <div className='img_2'></div>
                        <p className='content_title'>Листова земля</p>
                        <p className='content_number'>3</p>
                        <p>1200</p>
                    </div>
                    <div className='goods_content goods_margin'>
                        <p className='content_№'>3</p>
                        <div className='img_3'></div>
                        <p className='content_title'>Лейка</p>
                        <p className='content_number'>3</p>
                        <p>1000</p>
                    </div>
                </div>

                <div className='kur'> 
                  <div className='kur_status'>
                      <h3>Курьер</h3>
                      <div>Принял</div>
                  </div>
                  <div className='kur_name'>
                      <h3>Имя:</h3>
                      <p>Нурмухаммед</p>
                  </div>
                  <div className='kur_number'>
                      <h3>Номер:</h3>
                      <p>+996 505 614 949</p>
                  </div>
                  <div className='kur_adress'>
                      <h3>Адрес:</h3>
                      <p>Жибек-Жолу 305, дом 30, кв 5</p>
                  </div>
                </div>
         </ModalClient>
    </div>
  )
}

export default ProcessedInfo;