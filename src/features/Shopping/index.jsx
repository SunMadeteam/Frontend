import Hr from '../../common/components/Hr/Hr';
import ShoppingCart from '../../common/components/Shopping-cart/ShoppingCart';
import './index.scss';
import WideButton from './../../common/components/Wide-button/index';
import { Link } from 'react-router-dom';
import HelloText from '../../common/components/Hello-text';
import right from './img/right.png';

let product_sum = 3;

const Shopping = () => {
  return (
    <div >
      <div className='header_cart container'>
          <HelloText />
      </div>
      <div className="shopping container">
        <div className="shopping__top flex">
          <h3>Товаров: {product_sum}</h3>
          <button className='button clear'>Очистить</button>
        </div>
        <ShoppingCart/>
        <Hr/>
         <ShoppingCart/>
         <Hr />
         <ShoppingCart/>
         <Hr />
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
          <div className="price price_big">11660 с</div>
        </div>
        <div className='order_product'>
          <Link to={'/order'}><WideButton word='ОФОРМИТЬ ЗАКАЗ'/></Link>
        </div>
        
      </div>
    </div>
  )
}


export default Shopping;