import React,{useEffect, useState} from 'react'
import './GoodsInfo.scss'
import { OrderDelete } from '../../../Orders/NewOrders/OrderDelete/OrderDelete'
import { ModalAdd } from '../../../AddBtn/ModalAdd/ModalAdd'
import { Care } from '../HardCare/Care'
import { Category } from '../HardCare/Category'
import { useDispatch, useSelector } from 'react-redux'
import { getGoods } from '../../../../../Store/AsyncAction/getGoods'
export const GoodsInfo = () => {
const goods = useSelector(state => state.Goods.goods)
const [modalActive, setModalActive] = useState(false)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getGoods())
},[])
console.log(goods)
// let i = 1
// const number = (i) => {
//     let element = goods.products.map(element=>element.id)
//     for(i=0; i<=element.length;i++){
//         console.log('dsad',i)
//     }
//     return i=i+1
// }
// number()
  return (
    <div>
        {/* {goods.results.map(item=>console.log(item))} */}

        {goods.results.map((element, index) =>
            <div className='goods_info1' key={element.id}>
            <div className='goods_info' onClick={()=>setModalActive(true)}>
                    <div className='info_№'>
                    <h4>{index+1}</h4>
                </div>
                <div className='info_img'>
                    <img src={element.image} width="84px" height="80px"/>
                </div>
                <div className='info_title'>
                    <h4>{element.name}</h4>
                </div>
                <div className='info_data'>
                    <h4>00.00.0000</h4>
                </div>
                <div className='info_category'>
                    <h4>{element.category}</h4>
                </div>
                <div className='info_description'><h4>{element.description}</h4></div>
            </div> 
            <div className='info_delete'><OrderDelete/></div>  
         </div>
        )}
          <ModalAdd active={modalActive} setActive={setModalActive}>
            <div>
                <h2>Данные товара</h2>
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
