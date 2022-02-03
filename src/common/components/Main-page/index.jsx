import Banner from "../Banner-main";
import CartegoryCartWrapper from "../Category-cart-wrapper";
import CategoryTitle from "../Category-title";
import HelloText from "../Hello-text";

const MainPage = () => {
  return (
    <div>
      <HelloText />
      <Banner />
      <CartegoryCartWrapper />
      <CategoryTitle title="Популярные" />
      <CategoryTitle title="Уход" />
      <CartegoryCartWrapper />

    </div>
  )
}

export default MainPage;