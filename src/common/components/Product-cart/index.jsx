import FavoriteHeart from '../Favorite-heart';
import './index.scss';
import PlusMinus from './../Plus-minus-button/index';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const ProductCart = ({base}) => {
  console.log(base)

  const auth = getAuth()
  

  const handleAddToCart = (id) =>{
    fetch(`https://sunmadebackend.herokuapp.com/api/cart/`, {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        user:String(auth.currentUser.uid)
      })

    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }
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
          <div className='plus_mines'>
            <button onClick={() => handleAddToCart(base.id)}> <p> + </p> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart;