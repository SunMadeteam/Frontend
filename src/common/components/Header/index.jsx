import './index.scss';
import back from  './img/back.svg';
import BlackHeart from './../Black-heart/index';

const Header = ({position}) => {
  return (
    <div className={position?'container header  header_position ':'container header  '}>
      <img src={back} alt="" />
      <BlackHeart />
    </div>
  )
}

export default Header;