import './index.scss';
import back from  './img/back.svg';
import BlackHeart from './../Black-heart/index';
import { Link } from 'react-router-dom';

const Header = ({position}) => {
  return (
   <Link to="/catalogs">
     <div className={position ?'container header  header_position ':'container header  '}>
        <img src={back} alt="" />
        <BlackHeart />
    </div>
   </Link>
  )
}

export default Header;