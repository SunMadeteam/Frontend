import './index.scss'
import Banner from "../../common/components/Banner-main";
import HelloText from "../../common/components/Hello-text";
import Sorting from '../../common/components/Sorting';
import AllProductCarts from '../../common/components/All-product-carts';


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