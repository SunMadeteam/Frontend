import './index.scss';
import { useState } from 'react';
import heart from "./img/favorite-heart.svg";
import redheart from "./img/red-heart.svg";
import { useDispatch } from 'react-redux';
import { addFavoriteAction } from '../../../redux/favorite/favoriteReduce';
import { useEffect } from 'react';
import { removeFavoriteAction } from './../../../redux/favorite/favoriteReduce';

const FavoriteHeart = ({base, like}) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    if(like){
      setState(true)
    }
  }, [])
  
  
  const onFavorite = (id) => {
    if(state){
      dispatch(removeFavoriteAction(id))
    }
  }
  return (
    <div className='favorite_heart' onClick={()=>onFavorite(base.id)}>
      <img src={state ? redheart : heart} alt="" />
    </div>
  )
}

export default FavoriteHeart;