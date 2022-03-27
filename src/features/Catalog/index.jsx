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

  const catalogIndex = useLocation().pathname.substring(9)

  console.log(id)


  useEffect(() => {
    getDetail(url_catalog_name);
  }, []);
  const getDetail = async ( url) => {
    fetch(url)
    .then(res => res.json())
    .then(r => setCatalog(r.results))
  };

  console.log(catalog)

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