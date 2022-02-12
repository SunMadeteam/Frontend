import CatalogButton from '../Catalog-button';
import HomeButton from '../Home-button';
import PersonalButton from '../Personal-area-button';
import ShoppingButton from '../Shopping-button';
import './index.scss';

const FooterMenu = () => {
  return (
    <div className='footer'>
      <div className='footer_menu'>
        <HomeButton />
        <CatalogButton />
        <ShoppingButton />
        <PersonalButton />
      </div>
    </div>
  )
}

export default FooterMenu;