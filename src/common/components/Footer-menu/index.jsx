import CatalogButton from '../Catalog-button';
import HomeButton from '../home-button';
import PersonalButton from '../Personal-area-button';
import ShoppingButton from '../Shopping-button';
import './index.scss';

const FooterMenu = () => {
  return (
    <div className='footer_menu'>
      <HomeButton />
      <CatalogButton />
      <ShoppingButton />
      <PersonalButton />
    </div>
  )
}

export default FooterMenu;