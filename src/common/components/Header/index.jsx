import './index.scss';
import back from  './img/back.svg';
import FavoriteHeart from '../Favorite-heart';

const Header = () => {
  return (
    <div className='header container'>
      <img src={back} alt="" />
      <FavoriteHeart />
    </div>
  )
}

export default Header;