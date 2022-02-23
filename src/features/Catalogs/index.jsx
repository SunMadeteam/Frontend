import { Link } from 'react-router-dom';
import CatalogBlock from '../../common/components/Catalog-block';
import HelloText from '../../common/components/Hello-text';
import garden from './img/garden.png';
import home from './img/home.png';
import present from './img/present.png';
import ground from './img/ground.png';
import nutrition from './img/nutrition.png';
import accessories from './img/accessories.png';
import './index.scss';

const Catalogs = () => {
  return (
    <div className='container'>
      <HelloText />
      <Link to="catalogs"> {<CatalogBlock text="Cад" img={garden.toString()} />} </Link>
      <Link to="catalogs"> {<CatalogBlock text="Дом" img={home.toString()} />} </Link>
      <Link to="catalogs"> {<CatalogBlock text="Для подарка" img={present.toString()} />} </Link>
      <Link to="catalogs"> {<CatalogBlock text="Почва" img={ground.toString()} />} </Link>
      <Link to="catalogs"> {<CatalogBlock text="Питание" img={nutrition.toString()} />} </Link>
      <Link to="catalogs"> {<CatalogBlock text="Аксессуары" img={accessories.toString()} />} </Link>
    </div>
  )
}

export default Catalogs;