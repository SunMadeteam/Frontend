import './index.scss';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCart from './../../common/components/Product-cart/index';
import Header from './../../common/components/Header/index';



const Catalog = (props) => {
  const url_catalog_name = 'https://sunmadebackend.herokuapp.com/category/'

  const [catalogeMore, setCatalog] = useState('');

  const catalogName = useLocation().pathname.substring(9)




  useEffect(() => {
    getDetail(catalogName);
  }, []);
  const getDetail = async (catalogName) => {
    const req = await fetch(url_catalog_name + catalogName);
    const res = await req.json();
    setCatalog(res.products);
    console.log(res.products);

  };

  

  return (
    <div className='catalog-wrap'>
    <Header />
      <div className='catalog-wrapper container'>
      {
        catalogeMore ?
        catalogeMore.map( catalog=>{
          return(
           <ProductCart title={catalog.name} image={catalog.image} price={catalog.price} key={catalog.id} productId={catalog.id}/>
          )
        }
        ):<div>oops</div>
      }
      </div>
    </div>
  )
}

export default Catalog;