import React, {useState} from 'react'
import "./ProcessedInfo.scss"
import { ModalClient } from '../../Modals/ModalClient/ModalClient'
import { OrderDelete } from '../../NewOrders/OrderDelete/OrderDelete'

const ProcessedInfo = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div> 
        <div className='processed_info' onClick={()=>setModalActive(true)}>
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
            <div className='ball ball_2'>2</div>
         </div>

         <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>2</h4>
            </div>
            <div className='check_time'>
                <h4>15:22</h4>
            </div>
            <div className='check_number'>
                <h4>+996508234523</h4>
            </div>
            <div className='check_name'>
                <h4>Айгерим</h4>
            </div>
            <div className='check_adres'>
                <h4>Джал 23</h4>
            </div>
            <div className='ball ball_1'>1</div>
          </div>

          <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>3</h4>
            </div>
            <div className='check_time'>
                <h4>17:42</h4>
            </div>
            <div className='check_number'>
                <h4>+996502423322</h4>
            </div>
            <div className='check_name'>
                <h4>Диана</h4>
            </div>
            <div className='check_adres'>
                <h4>8 мкр, дом 2 кв 5</h4>
            </div>
            <div className='ball ball_5'>5</div>
        </div>
        <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>4</h4>
            </div>
            <div className='check_time'>
                <h4>11:22</h4>
            </div>
            <div className='check_number'>
                <h4>+996779992333</h4>
            </div>
            <div className='check_name'>
                <h4>Арген</h4>
            </div>
            <div className='check_adres'>
                <h4>Тыналиева 83</h4>
            </div>
            <div className='ball ball_4'>4</div>
        </div>
        <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>5</h4>
            </div>
            <div className='check_time'>
                <h4>08:51</h4>
            </div>
            <div className='check_number'>
                <h4>+996551234421</h4>
            </div>
            <div className='check_name'>
                <h4>Самат</h4>
            </div>
            <div className='check_adres'>
                <h4>Боконбаева/Манаса</h4>
            </div>
            <div className='ball ball_3'>3</div>
        </div>
        <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>6</h4>
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
            <div className='ball ball_2'>2</div>
         </div>

         <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>7</h4>
            </div>
            <div className='check_time'>
                <h4>15:22</h4>
            </div>
            <div className='check_number'>
                <h4>+996508234523</h4>
            </div>
            <div className='check_name'>
                <h4>Айгерим</h4>
            </div>
            <div className='check_adres'>
                <h4>Джал 23</h4>
            </div>
            <div className='ball ball_1'>1</div>
          </div>

          <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>8</h4>
            </div>
            <div className='check_time'>
                <h4>17:42</h4>
            </div>
            <div className='check_number'>
                <h4>+996502423322</h4>
            </div>
            <div className='check_name'>
                <h4>Диана</h4>
            </div>
            <div className='check_adres'>
                <h4>8 мкр, дом 2 кв 5</h4>
            </div>
            <div className='ball ball_5'>5</div>
        </div>
        <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>9</h4>
            </div>
            <div className='check_time'>
                <h4>11:22</h4>
            </div>
            <div className='check_number'>
                <h4>+996779992333</h4>
            </div>
            <div className='check_name'>
                <h4>Арген</h4>
            </div>
            <div className='check_adres'>
                <h4>Тыналиева 83</h4>
            </div>
            <div className='ball ball_4'>4</div>
        </div>
        <div className='processed_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>10</h4>
            </div>
            <div className='check_time'>
                <h4>08:51</h4>
            </div>
            <div className='check_number'>
                <h4>+996551234421</h4>
            </div>
            <div className='check_name'>
                <h4>Самат</h4>
            </div>
            <div className='check_adres'>
                <h4>Боконбаева/Манаса</h4>
            </div>
            <div className='ball ball_3'>3</div>
        </div>
        
        <ModalClient active={modalActive} setActive={setModalActive}>
        <div className='modal_text'>
                    <h3>№ 13</h3>
                </div>
                <div className='modal_order__flex'>
                    <label>Имя</label>
                    <input className='modal_order__input' placeholder='Леонид'></input>
                    <label>Номер</label>
                    <input className='modal_order__input' placeholder='+996 000 111 111'></input>
                    <label>Адрес</label>
                    <input className='modal_order__input input_height' placeholder='Жибек-Жолу 305, дом 30, кв. 5'></input>
                </div>
                <div className='modal_goods__processed'>
                    <div className='goods_flex'>
                        <h3 className='goods_№'>№</h3>
                        <h3 className='goods_photo'>Фото</h3>
                        <h3 className='goods_title'>Название</h3>
                        <h3 className='goods_number'>Кол-во</h3>
                        <h3 className='goods_sum'>Сумма</h3>
                    </div>
                    <div className='goods_content'>
                        <p className='content_№'>1</p>
                        <div className='img_1'></div>
                        <p className='content_title'>Монстера</p>
                        <input className='input_number' placeholder='3'></input>
                        <p>8400 c</p>
                        <div className='goods_delete'><OrderDelete/></div>
                    </div>
                    <div className='goods_content'>
                        <p className='content_№'>2</p>
                        <div className='img_2'></div>
                        <p className='content_title'>Листова земля</p>
                        <input className='input_number' placeholder='3'></input>
                        <p>1200 c</p>
                        <div className='goods_delete'><OrderDelete/></div>
                    </div>
                    <div className='goods_content'>
                        <p className='content_№'>3</p>
                        <div className='img_3'></div>
                        <p className='content_title'>Лейка</p>
                        <input className='input_number' placeholder='3'></input>
                        <p>1000 c</p>
                        <div className='goods_delete'><OrderDelete/></div>
                    </div>
                    <p className='modal_total__processed'>10 600 c</p>
                </div>
                <div className='kur'> 
                   
                  <div className='kur_status'>
                      <div>
                        <label>Имя</label>
                        <p>Леонид</p>
                      </div>
                      <div className='kur_accept'>Принял</div>
                  </div>
                 
                  <div className='kur_number'>
                        <label>Номер</label>
                        <p>+996 000 111 111</p>
                  </div>
                  <div className='kur_adress'>
                      <label>Филиал</label>
                      <p>Жибек-Жолу 305, дом 30, кв 5</p>
                  </div>
                </div>
         </ModalClient>
    </div>
  )
}

export default ProcessedInfo;