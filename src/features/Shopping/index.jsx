import Header from '../../common/components/Header';
import Hr from '../../common/components/Hr/Hr';
import ShoppingCart from '../../common/components/Shopping-cart/ShoppingCart';
import './index.scss';
import WideButton from './../../common/components/Wide-button/index';
import { Link } from 'react-router-dom';

const Shopping = () => {
  return (
    <div >
      <div className='header_cart'>
          <Header />
      </div>
      <div className="shopping container">
        <div className="shopping__top flex">
          <h3>Товаров: 3</h3>
          <button className='button clear'>Очистить</button>
        </div>
        <ShoppingCart/>
        <Hr/>
         <ShoppingCart/>
        <Hr/>
        <div className="flex shopping__block">
          <div className="shopping__subtitle">Сумма</div>
          <div className="price">1270 с</div>
        </div>
       <Hr/>
        <div className="flex shopping__block">
          <div className="shopping__subtitle">Скидка <br /> <div>10% скидка  на оформление <br /> первого заказа</div></div>
          <div className="price">1240 с</div>
        </div>
        <Hr/>
        <div className="flex shopping__block">
          <div className="shopping__subtitle shopping__subtitle-mar-bottom">Доставка</div>
          <div className="price">800 с</div>
        </div>
        <div className="flex shopping__block">
          <div className="shopping__subtitle shopping__subtitle-normal">Выбрать дату и время</div>
          <div className="">19 янаря 11:00</div>
        </div>
        <Hr/>
        <div className="flex shopping__block shopping__block_mb">
          <div className="shopping__subtitle">Итого:</div>
          <div className="price price_big">11660 с</div>
        </div>
        <Link to={'/ordering'}><WideButton word='ОФОРМИТЬ ЗАКАЗ'/></Link>
      </div>
    </div>
  )
}


export default Shopping;