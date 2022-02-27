import FavoriteHeart from '../Favorite-heart';
import './index.scss';
import PlusMinus from './../Plus-minus-button/index';
import { Link } from 'react-router-dom';

const ProductCart = ({title, img}) => {
  return (
    <div className='product_cart'>
      
      <div className='cart_img'>
      <Link to ={'/cartDescription/' + title}>
         <img src={img} alt="" /> 
      </Link>
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