import './index.scss';
import back from  './img/back.svg';
import FavoriteHeart from '../Favorite-heart';

const Header = ({position}) => {
  return (
    <div className={position?'header container header_position ':'header container '}>
      <img src={back} alt="" />
      <FavoriteHeart />
    </div>
  )
}

export default Header;