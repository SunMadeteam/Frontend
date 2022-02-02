import Banner from "../Banner-main"
import CategoryCart from "../Category-cart"
import CategoryTitle from "../Category-title"
import HelloText from "../Hello-text"

const MainPage = () => {
  return (
    <div>
      <HelloText />
      <Banner />
      <CategoryTitle title="Категории"/>
      <div style={{display: 'flex'}}>
        <CategoryCart categoryTitle="Cад" categoryImage="./category_cart_garden.png" />
        <CategoryCart categoryTitle="Дом" categoryImage="./category_cart_home.png" />
      </div>
      
    </div>
  )
}

export default MainPage