import { Link } from 'react-router-dom';
import CatalogButton from '../Catalog-button';
import HomeButton from '../home-button';
import PersonalButton from '../Personal-area-button';
import ShoppingButton from '../Shopping-button';
import './index.scss';

const FooterMenu = () => {
  return (
    <div className='footer'>
      <div className='footer_menu'>
        <Link to='/'> {<HomeButton />} </Link>
        <Link to='/catalogs'> {<CatalogButton />} </Link>
        <Link to='/shopping'> {<ShoppingButton />} </Link>
        <Link to='/personalArea'> {<PersonalButton />} </Link>
      </div>
    </div>
  )
}

export default FooterMenu;