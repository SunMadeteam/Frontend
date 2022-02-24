import './index.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCart from './../../common/components/Product-cart/index';
import Header from './../../common/components/Header/index';



const Catalog = (props) => {
  const url_catalog_name = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

  const [catalogeMore, setCatalog] = useState('');

  const catalogName = useLocation().pathname.substring(9)

  useEffect(() => {
    getDetail(catalogName);
  }, []);


  const getDetail = async (catalogName) => {
    const req = await fetch(url_catalog_name + catalogName);
    const res = await req.json();
    setCatalog(res.meals);
    console.log(res.meals);

  };

  return (
    <div className='catalog-wrap'>
    <Header />
      <div className='catalog-wrapper container'>
      {
        catalogeMore ?
        catalogeMore.map( catalog=>{
          return(
            <ProductCart title={catalog.strMeal} img={catalog.strMealThumb} key={catalog.idMeal}/>
          )
        }

        ):<div>oops</div>
      }

      </div>
    </div>
  )
}

export default Catalog;