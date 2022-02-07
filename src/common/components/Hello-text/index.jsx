import FavoriteHeart from "../Favorite-heart";
import './index.scss';

const HelloText = () => {
  return (
    <div className="hello_text ">
      <p>Привет!</p>
      <FavoriteHeart />
    </div>
  )
}

export default HelloText;