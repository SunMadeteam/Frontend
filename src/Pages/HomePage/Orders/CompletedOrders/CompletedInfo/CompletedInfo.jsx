import React,{useState} from 'react'
import "./CompletedInfo.scss"
import { OrderDelete } from '../../NewOrders/OrderDelete/OrderDelete'
import { ModalClient } from '../../Modals/ModalClient/ModalClient'
import "./CompletedInfo.scss"
export const CompletedInfo = () => {
    const [modalActive, setModalActive] = useState(false)
  return (
    <div className='all' >
        <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>1</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>2</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>3</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>4</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>5</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>6</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>7</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>8</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
         </div>

         <div className='order_info'>
            <div className='order_info' onClick={()=>setModalActive(true)}>
                <div className='check_№'>
                    <h4>9</h4>
                </div>
                <div className='check_time'>
                    <h4>19:00</h4>
                </div>
                <div className='check_number'>
                    <h4>+996709323323</h4>
                </div>
                <div className='check_name'>
                    <h4>Шуламита</h4>
                </div>
                <div className='check_adres'>
                    <h4>Политех</h4>
                </div>
            </div>
            <div className='check_delete'><OrderDelete/></div>
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
                      <div className='kur_completed'>Завершил</div>
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

export default CompletedInfo;