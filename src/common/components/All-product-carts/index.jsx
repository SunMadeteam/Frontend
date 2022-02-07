import ProductCart from '../Product-cart';
import './index.scss'

const AllProductCarts = () => {
  return (
    <div className='all_product_cart'>
      <ProductCart />
      <ProductCart />
    </div>
  )
}

export default AllProductCarts;