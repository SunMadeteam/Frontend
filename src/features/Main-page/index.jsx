import './index.scss'
import Banner from "../../common/components/Banner-main";
import HelloText from "../../common/components/Hello-text";
import AllProductCarts from '../../common/components/All-product-carts';
import CategoryTitle from './../../common/components/Category-title/index';


const MainPage = () => {
  return (
    <div className='container'>
      <HelloText />
      <Banner />
      <CategoryTitle title="Популярные товары" />
      <AllProductCarts />
      <hr />
    </div>
  )
}

export default MainPage;