import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HelloText from '../../common/components/Hello-text';
import './index.scss';
import CatalogBlock from './../../common/components/Catalog-block/index';
import Loader from '../../common/components/Loader/Loader';

const Catalogs = () => {
  const URL_CATALOG = 'https://sunmadebackend.herokuapp.com/api/categories/'
  const [catalog, setCatalog] = useState(null)
  useEffect(() => {
    getCatalog(URL_CATALOG)
  }, [])

  const getCatalog = async (url) => {
    fetch(url)
    .then(res => res.json())
    .then(r => setCatalog(r.results))
  }
  const saveIndexCatalog =(index)=>{
    localStorage.setItem('catalogIndex', index)
  }

  return (
    <div className='container'>
      <HelloText />
       
        {
        (catalog && catalog?.length !== 0) ? (
          catalog?.map((item , index) => (
            <Link to={`/catalog/${item.id}`} key={item.id} onClick={()=>saveIndexCatalog(index)}>
              <CatalogBlock text={item.name} img={item.image}/>
            </Link>
          ))
        ) : (catalog === null) ? (
          <Loader />
        ) : (
          <>Datacatalog undefined</>
        )
      } 
    </div>
  )
}

export default Catalogs;