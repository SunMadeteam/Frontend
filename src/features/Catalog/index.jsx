import './index.scss';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCart from './../../common/components/Product-cart/index';
import Header from './../../common/components/Header/index';
import Slider from './../../common/components/Slider/Slider';



const Catalog = (props) => {
  const url_catalog_name = 'https://sunmadebackend.herokuapp.com/category/'

  const [catalog, setCatalog] = useState(null);

  const catalogIndex = useLocation().pathname.substring(9)




  useEffect(() => {
    getDetail(catalogIndex);
  }, []);
  const getDetail = async (catalogIndex) => {
    const req = await fetch(url_catalog_name + catalogIndex);
    const res = await req.json();
    setCatalog(res.products);

  };

  

  return (
    <div className='catalog-wrap'>
    <Header />
    <Slider catalogIndex={catalogIndex}/>

      <div className='container catalog-wrapper '>

      {
        (catalog && catalog?.length !== 0) ? (
          catalog?.map((item , index) => (
            <ProductCart key={index}  base={item}/>
          ))
        ) : (catalog === null) ? (
          <p>Loading</p>
        ) : (
          <>Database undefined</>
        )
      }
     
      </div>
    </div>
  )
}

export default Catalog;