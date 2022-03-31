import './index.scss';
import { useState } from 'react';
import heart from "./img/favorite-heart.svg";
import blackHeart from "./img/black-heart.svg";

const BlackHeart = () => {
  const [state, setState] = useState(false);

  const onFavorite = () => {
    setState(!state)
  }
  return (
    <div className='favorite_heart' onClick={onFavorite}>
      <img src={state ? blackHeart : heart} alt="" />
    </div>
  )
}

export default BlackHeart;