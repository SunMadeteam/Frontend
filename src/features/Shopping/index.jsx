import Hr from '../../common/components/Hr/Hr';
import ShoppingCart from '../../common/components/Shopping-cart/ShoppingCart';
import './index.scss';
import WideButton from './../../common/components/Wide-button/index';
import { Link } from 'react-router-dom';
import HelloText from '../../common/components/Hello-text';
import right from './img/right.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from './../../common/components/Modal/Modal';



const Shopping = () => {
  const basket = useSelector(state=>state.basket.basket)
  const [total, setTotal]= useState()
  const [modal , setModal] = useState(false)
 const dispatch = useDispatch()
 useEffect(() => {
  let total = basket.reduce((sum, product) => {
    return sum += product.price},
  0);
  // dispatch(sumInitialAction(total))
  setTotal(total)
  }, [])

const ordering=()=>{
  console.log('owkqpo');
    if(basket.length!==0){
      window.location.href = '/order'
    }
    if(basket.length===0){
      setModal(true)
    }
}

  
  
  return (
    <div >
      <div className='header_cart container'>
          <HelloText />
      </div>
      <Modal modal={modal} setModal={setModal} text='Для оформления заказа, нужно заполнить корзину'/>
      <div className="shopping container">
        <div className="shopping__top flex">
          <h3>Товаров: {basket.length}</h3>
          <button className='button clear'>Очистить</button>
        </div>
        {
          basket.length !==0 ? basket.map(product =>{
            console.log(product)
            return(
              <div>
                 <ShoppingCart product={product} setTotal={setTotal} total={total}/>
                  <Hr/>
              </div>
            )}):<div>basket is empty!</div>
        }
        <div className="flex shopping__block">
          <Link to = {'/selectDate'}><div className="shopping__subtitle shopping__subtitle-normal">Выбрать дату и время
          <p className='date_choose'>19 янаря 11:00</p>
          </div></Link>
          <div className="">
            <img src={right} alt=''/>
          </div>
        </div>
        
        <div className="flex shopping__block shopping__block_mb">
          <div className="shopping__subtitle total_sum">Итого:</div>
          <div className="price price_big">{total} с</div>
        </div>
        <div className='order_product' onClick={()=>ordering()}  >
          <WideButton word='ОФОРМИТЬ ЗАКАЗ' />
        </div>
        
      </div>
    </div>
  )
}


export default Shopping;