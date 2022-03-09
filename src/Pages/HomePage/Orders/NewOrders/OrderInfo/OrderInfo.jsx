import React, {useState} from 'react'
import './OrderInfo.scss'
import { ModalClient } from '../../Modals/ModalClient/ModalClient'
import {ImPencil} from 'react-icons/im'
import { OrderDelete } from '../OrderDelete/OrderDelete'

export const OrderInfo = () => {
    const [modalActive, setModalActive] = useState(false)
  return (
    <div>
    <div className='order_info'>
        <div className='order_info' onClick={()=>setModalActive(true)}>
            <div className='check_№'>
                <h4>1</h4>
            </div>
            <div className='check_time'>
                <h4>15:33</h4>
            </div>
            <div className='check_number'>
                <h4>+996505555555</h4>
            </div>
            <div className='check_name'>
                <h4>Бегимай</h4>
            </div>
            <div className='check_adres'>
                <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                    <h4>15:33</h4>
                </div>
                <div className='check_number'>
                    <h4>+996505555555</h4>
                </div>
                <div className='check_name'>
                    <h4>Бегимай</h4>
                </div>
                <div className='check_adres'>
                    <h4>Советская\Ахунбавева</h4>
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
                <div className='modal_goods'>
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
                    <p className='modal_total'>10 600 c</p>
                    <div className='modal_button__flex'>
                        <button>ОТМЕНИТЬ</button>    
                        <button className='button_accept'>ПРИНЯТЬ</button>    
                    </div>
                </div>
         </ModalClient>
    </div>
  )
}
