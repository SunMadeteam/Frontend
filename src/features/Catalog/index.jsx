import './index.scss';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCart from './../../common/components/Product-cart/index';
import Header from './../../common/components/Header/index';
import Slider from './../../common/components/Slider/Slider';
import Loader from '../../common/components/Loader/Loader';



const Catalog = (props) => {
  const url_catalog_name = 'https://sunmadebackend.herokuapp.com/category/'

  const [catalogeMore, setCatalog] = useState('');

  const catalogId = useLocation().pathname.substring(9,10)
  const slideIndex = useLocation().pathname.substring(10,11)




  useEffect(() => {
    getDetail(catalogId);
  }, []);
  const getDetail = async (catalogId) => {
    const req = await fetch(url_catalog_name + catalogId);
    const res = await req.json();
    setCatalog(res.products);
  };
  

  return (
    <div className='catalog-wrap'>
    <Header />
    <Slider slideIndex={slideIndex}/>

      <div className= {catalogeMore ? 'container catalog-wrapper ' : 'container'}>

      {
        catalogeMore ?
        catalogeMore.map( catalog=>{
          return(
           <ProductCart title={catalog.name} image={catalog.image} price={catalog.price} key={catalog.id} productId={catalog.id}/>
          )
        }
        ):<Loader/>
      }
      </div>
    </div>
  )
}

export default Catalog;