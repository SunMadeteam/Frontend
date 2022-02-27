import './index.scss';
import back from  './img/back.svg';
import BlackHeart from './../Black-heart/index';

const Header = ({position}) => {
  return (
    <div className={position?'header container header_position ':'header container '}>
      <img src={back} alt="" />
      <BlackHeart />
    </div>
  )
}

export default Header;