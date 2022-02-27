import './index.scss';
import back from  './img/back.svg';
import BlackHeart from './../Black-heart/index';

const Header = () => {
  return (
    <div className='header container'>
      <img src={back} alt="" />
      <BlackHeart />
    </div>
  )
}

export default Header;