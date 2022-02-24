import './index.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCart from './../../common/components/Product-cart/index';


const Catalog = () => {
  const url_catalog_name = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

  const [catalog, setCatalog] = useState('');

  const catalogName = useLocation().pathname.substring(9)

  useEffect(() => {
    getCatalog(catalogName);
  }, []);


  const getCatalog = async (catalogName) => {
    const req = await fetch(url_catalog_name + catalogName);
    const res = await req.json();
    setCatalog(res.meals);
  };

  return (
    <div className='catalog-wrapper'>

    {
      catalog ?
      catalog.map( catalog=>{
        return(
          <ProductCart title={catalog.strMeal} img={catalog.strMealThumb} key={catalog.idMeal}/>
        )
      }
      ):<div>oops</div>
    }
    </div>
  )
}

export default Catalog;