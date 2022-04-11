import FavoriteHeart from '../Favorite-heart';
import './index.scss';
import PlusMinus from './../Plus-minus-button/index';
import { Link } from 'react-router-dom';

const ProductCart = ({base}) => {
  console.log(base)
  return (
    <div className='product_cart'>
      <div className='cart_img'>
        <Link to ={'/cartDescription/' + base.id}>
          <img src={base.image} alt="" /> 
        </Link>
        <FavoriteHeart />
      </div>
      <div className='cart_body'>
        <Link to ={'/cartDescription/' + base.id}>
            <p className='title'>{base.name}</p>
        </Link> 
        <div className='price_wrap flex'>
          <p className='price_product'>{base.price} с</p>
          <PlusMinus plusOrMinus="+" />
        </div>
      </div>
    </div>
  )
}

export default ProductCart;