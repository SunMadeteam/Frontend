import './index.scss';
import { useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import ProductCart from '../../common/components/Product-cart';
import Header from '../../common/components/Header';
import Slider from './../../common/components/Slider/Slider';
import Loader from '../../common/components/Loader/Loader';



const Catalog = (props) => {
  const {id} = useParams()
  const url_catalog_name = `https://sunmadebackend.herokuapp.com/api/products/?category=${id}`
  const [catalog, setCatalog] = useState(null);
  const [modal , setModal] = useState(false)
  useEffect(() => {
    getDetail(url_catalog_name);
  }, []);
  const getDetail = async ( url) => {
    fetch(url)
    .then(res => res.json())
    .then(r => setCatalog(r.results))
    
  };
  

  return (
    <div className='catalog-wrap'>
    <Header position={true}/>
    <Slider />
    <div className ={modal?'modal-basket ':'modal-basket modal-basket_none'}>
      Товар добавлен в корзину
    </div>
      <div className='container catalog-wrapper '>
      {
        (catalog && catalog?.length !== 0) ? (
          catalog?.map((catalog , index) => (
            <ProductCart key={index}  base={catalog} setModal={setModal}/>
          ))
        ) : (catalog === null) ? (
            <div className='loader'>
              <Loader />
            </div>
        ) : (
          <>Database undefined</>
        )
      }
     
      </div>
    </div>
  )
}

export default Catalog;