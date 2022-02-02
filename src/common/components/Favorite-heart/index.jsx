import './index.scss';
import heart from "./favorite-heart.svg"

const FavoriteHeart = () => {
  const state = false;

  const onFavorite = (state) => {
    state = !state;
  }
  return (
    <div className='favorite_heart' onClick={onFavorite}>
      <img src={heart} alt="" />
    </div>
  )
}

export default FavoriteHeart;