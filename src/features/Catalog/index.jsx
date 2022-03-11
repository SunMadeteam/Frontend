import './index.scss';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCart from './../../common/components/Product-cart/index';
import Header from './../../common/components/Header/index';
import Slider from './../../common/components/Slider/Slider';



const Catalog = (props) => {
  const url_catalog_name = 'https://sunmadebackend.herokuapp.com/category/'

  const [catalogeMore, setCatalog] = useState('');

  const catalogIndex = useLocation().pathname.substring(9)




  useEffect(() => {
    getDetail(catalogIndex);
  }, []);
  const getDetail = async (catalogIndex) => {
    const req = await fetch(url_catalog_name + catalogIndex);
    const res = await req.json();
    setCatalog(res.products);
    console.log(res.products);

  };

  

  return (
    <div className='catalog-wrap'>
    <Header />
    <Slider catalogIndex={catalogIndex}/>

      <div className='container catalog-wrapper '>

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