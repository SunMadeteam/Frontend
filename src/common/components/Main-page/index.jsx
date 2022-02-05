import './index.scss'
import Banner from "../Banner-main";
import CategoryCart from "../Category-cart";
import CartegoryCartWrapper from "../Category-cart-wrapper";
import CategoryTitle from "../Category-title";
import HelloText from "../Hello-text";
import careGround from './careGround.svg'
import careNutrition from "./careNutrition.svg"
import rightSign from './right-sign.svg'

const MainPage = () => {
  return (
    <div>
      <HelloText />
      <Banner />
      <CartegoryCartWrapper />
      <div className='popular_wrapper'>
        <CategoryTitle title="Популярные" />
        <div className="container" >  <img src={rightSign} alt='' /> </div>
        
      </div>
      <CategoryTitle title="Уход" />
      <div className="care">
        <CategoryCart categoryTitle="Почва" categoryImage={careGround} />
        <CategoryCart categoryTitle="Питание" categoryImage={careNutrition} />
      </div>
    </div>
  )
}

export default MainPage;