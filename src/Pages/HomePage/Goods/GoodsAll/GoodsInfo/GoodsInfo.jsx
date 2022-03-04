import React,{useState} from 'react'
import './GoodsInfo.scss'
import { OrderDelete } from '../../../Orders/NewOrders/OrderDelete/OrderDelete'
import { ModalAdd } from '../../../AddBtn/ModalAdd/ModalAdd'
import { Care } from '../HardCare/Care'
import { Category } from '../HardCare/Category'
export const GoodsInfo = () => {
const [modalActive, setModalActive] = useState(false)
  return (
    <div>
        <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>1</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div> 
            <div className='info_delete'><OrderDelete/></div>  
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>2</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>  
            </div>  
            <div className='info_delete'><OrderDelete/></div>  
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>3</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div>    
            <div className='info_delete'><OrderDelete/></div>
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>4</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div>    
            <div className='info_delete'><OrderDelete/></div>
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>5</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div>  
            <div className='info_delete'><OrderDelete/></div>  
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>6</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div>   
            <div className='info_delete'><OrderDelete/></div> 
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>7</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div>   
            <div className='info_delete'><OrderDelete/></div> 
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>8</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div>    
            <div className='info_delete'><OrderDelete/></div>
         </div>

         <div className='goods_info1'>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                <div className='info_№'>
                    <h4>9</h4>
                </div>
                <div className='info_img'>
                </div>
                <div className='info_title'>
                    <h4>Монстера</h4>
                </div>
                <div className='info_data'>
                    <h4>03.01.2022</h4>
                </div>
                <div className='info_category'>
                    <h4>#Популярные</h4>
                </div>
                <div className='info_description'><h4>Сложность ухода - лёгкий</h4></div>
            </div> 
            <div className='info_delete'><OrderDelete/></div>   
         </div>
          <ModalAdd active={modalActive} setActive={setModalActive}>
            <div>
                <h2>Добавить товар</h2>
                <form className='goods_modal'>
                    <label className='goods_label label_margin'>Добавить фото</label>
                    <div className='goods_img'></div>
                    <label className='goods_label'>Название</label>
                    <input placeholder='Саговник'
                    className='goods_input'
                    />
                    <label className='goods_label'>Цена</label>
                    <input placeholder="2700c"
                    className='goods_input'
                    />
                    <label className='goods_label'>Описание</label>
                </form>
                <div className='goods_description'>Вечнозеленые растения, лианы, кустарники с лазящими толстыми стеблями, часто свисающими воздушными корнями. 
                Листья крупные, кожистые. Черешок длинный, у основания — влагалищный.
                </div>
                <Care/>
                <Category/>
                <button className="goods_button"> СОХРАНИТЬ </button>
            </div>  
         </ModalAdd>
    </div>
  )
}
