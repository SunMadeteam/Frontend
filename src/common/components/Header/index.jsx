import './index.scss';
import back from  './img/back.svg';
import BlackHeart from './../Black-heart/index';
import { Link } from 'react-router-dom';

const Header = ({position}) => {
  return (
   <div className={position? 'fix_header position_static': 'fix_header' }>
     <Link to="/catalogs">
     <div className='container header  '>
        <img src={back} alt="" />
        <BlackHeart />
    </div>
   </Link>
   </div>
  )
}

export default Header;