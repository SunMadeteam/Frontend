import FavoriteHeart from "../Favorite-heart";
import './index.scss';

const HelloText = () => {
  return (
    <div className="hello_text container">
      <p>Привет!</p>
      <FavoriteHeart />
    </div>
  )
}

export default HelloText;