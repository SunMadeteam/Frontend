import './index.scss'
import Banner from "../../common/components/Banner-main";
import HelloText from "../../common/components/Hello-text";
import Sorting from '../../common/components/Sorting';
import AllProductCarts from '../../common/components/All-product-carts';
import CategoryTitle from './../../common/components/Category-title/index';


const MainPage = () => {
  return (
    <div className='container'>
      <HelloText />
      <Banner />
      <CategoryTitle title="Популярные" />
      <AllProductCarts />
      <AllProductCarts />
      <AllProductCarts />
      <AllProductCarts />
      <hr />
    </div>
  )
}

export default MainPage;