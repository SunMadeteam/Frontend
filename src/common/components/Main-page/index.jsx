import './index.scss'
import Banner from "../Banner-main";
import HelloText from "../Hello-text";
import Sorting from '../Sorting';
import AllProductCarts from './../All-product-carts/index';


const MainPage = () => {
  return (
    <div className='container'>
      <HelloText />
      <Banner />
      <Sorting />
      <AllProductCarts />
      <AllProductCarts />
      <AllProductCarts />
      <AllProductCarts />
      <hr />
    </div>
  )
}

export default MainPage;