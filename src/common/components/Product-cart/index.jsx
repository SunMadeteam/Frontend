import FavoriteHeart from '../Favorite-heart';
import './index.scss';
import PlusMinus from './../Plus-minus-button/index';

const ProductCart = ({title, img}) => {
  return (
    <div className='product_cart'>
      <div className='cart_img'>
        <img src={img} alt="" />
        <FavoriteHeart />
      </div>
      <div className='cart_body'>
        <p className='title'>{title}</p>
        <div className='price_wrap flex'>
          <p>3500 с</p>
          <PlusMinus plusOrMinus="+" />
        </div>
      </div>
    </div>
  )
}

export default ProductCart;