import './index.scss'
import TitleEighteen from '../Title-eighteen';

const CategoryCart = ({categoryTitle, categoryImage}) => {
  return (
    
      <div className="category_cart container">
        <a href="#">
          <img src={categoryImage} alt="" />
        </a>
        <TitleEighteen title={categoryTitle} />
      </div>
     
  )
}

export default CategoryCart;