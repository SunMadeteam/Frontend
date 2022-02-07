import FavoriteHeart from '../Favorite-heart';
import './index.scss';
import sagovnik from './img/sagovnik.svg';
import PlusMinus from './../Plus-minus-button/index';

const ProductCart = () => {
  return (
    <div className='product_cart'>
      <div className='cart_img'>
        <img src={sagovnik} alt="" />
        <FavoriteHeart />
      </div>
      <div className='cart_body'>
        <p className='title'>Саговник</p>
        <div className='price_wrap flex'>
          <p>3500 с</p>
          <PlusMinus plusOrMinus="+" />
        </div>
      </div>
    </div>
  )
}

export default ProductCart;