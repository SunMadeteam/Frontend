import './index.scss';
import CategoryTitle from './../Category-title/index';
import CategoryCart from '../Category-cart';
import categoryGarden from '../Category-cart/category_cart_garden.png';
import categoryHome from '../Category-cart/category_cart_home.png'

const CartegoryCartWrapper = () => {
  return (
    <div className='category_cart_wrapper'>
      <CategoryTitle title="Категории" />
      <div className='category_wrap'>
      <CategoryCart categoryTitle="Cад" categoryImage={categoryGarden} />
      <CategoryCart categoryTitle="Дом" categoryImage={categoryHome} />
      </div>
    </div>
  )
}

export default CartegoryCartWrapper;