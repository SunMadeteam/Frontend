import FavoriteHeart from '../Favorite-heart';
import './index.scss';
import PlusMinus from './../Plus-minus-button/index';
import { Link } from 'react-router-dom';

const ProductCart = ({title, image, price , productId}) => {

  return (
    <div className='product_cart'>
      
      <div className='cart_img'>
      <Link to ={'/cartDescription/' + productId}>
         <img url={image} alt="" /> 
      </Link>
        <FavoriteHeart />
      </div>
      <div className='cart_body'>
      <Link to ={'/cartDescription/' + productId}>
          <p className='title'>{title}</p>
      </Link> 
        
        <div className='price_wrap flex'>
          <p>{price} с</p>
          <PlusMinus plusOrMinus="+" />
        </div>
      </div>
    </div>
  )
}

export default ProductCart;