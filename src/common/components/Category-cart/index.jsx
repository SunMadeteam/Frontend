import './index.scss'
import TitleEighteen from '../Title-eighteen';
import imageGarden from `${categoryImage}`;

const CategoryCart = ({categoryTitle, categoryImage}) => {
  return (
    
      <div className="category_cart container">
        <a href="#">
          <img src={imageGarden} alt="" />
        </a>
        <TitleEighteen title={categoryTitle} />
      </div>
     
  )
}

export default CategoryCart;