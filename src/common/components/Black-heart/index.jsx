import './index.scss';
import { useState } from 'react';
import heart from "./img/favorite-heart.svg";
import blackHeart from "./img/black-heart.svg";
import { useNavigate } from 'react-router-dom';

const BlackHeart = ({navigation}) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  


  const onFavorite = () => {
    setState(!state);
    navigate('/favorite')
  }
  return (
    <div className='favorite_heart' onClick={onFavorite}>
      <img src={state ? blackHeart : heart} alt="" />
    </div>
  )
}

export default BlackHeart;