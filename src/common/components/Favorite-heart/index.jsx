import './index.scss';
import { useState } from 'react';
import heart from "./favorite-heart.svg";
import redHeart from "./red-heart.svg";

const FavoriteHeart = () => {
  const [state, setState] = useState(false);

  const onFavorite = () => {
    setState(!state)
    console.log('Presset!')
  }
  return (
    <div className='favorite_heart' onClick={onFavorite}>
      <img src={state ? redHeart : heart} alt="" />
    </div>
  )
}

export default FavoriteHeart;