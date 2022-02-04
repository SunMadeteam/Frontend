import './index.scss'
import Banner from "../Banner-main";
import CategoryCart from "../Category-cart";
import CartegoryCartWrapper from "../Category-cart-wrapper";
import CategoryTitle from "../Category-title";
import HelloText from "../Hello-text";
import careGround from './careGround.svg'
import careNutrition from "./careNutrition.svg"

const MainPage = () => {
  return (
    <div>
      <HelloText />
      <Banner />
      <CartegoryCartWrapper />
      <CategoryTitle title="Популярные" />
      <CategoryTitle title="Уход" />
      <div className="care">
        <CategoryCart categoryTitle="Почва" categoryImage={careGround} />
        <CategoryCart categoryTitle="Питание" categoryImage={careNutrition} />
      </div>
    </div>
  )
}

export default MainPage;