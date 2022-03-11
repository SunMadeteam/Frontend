import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HelloText from '../../common/components/Hello-text';
import './index.scss';
import CatalogBlock from './../../common/components/Catalog-block/index';
import Loader from '../../common/components/Loader/Loader';



const Catalogs = () => {
  const URL_CATALOG = 'https://sunmadebackend.herokuapp.com/api/categories/'
  const [catalog, setCatalog] = useState('')
  useEffect(() => {
    getCatalog()
  }, [])

  const getCatalog = async () => {
    const req = await fetch(URL_CATALOG)
    const resp = await req.json()
    setCatalog(resp.categories)
    console.log(resp);
  }
  return (
    <div className='container'>
      <HelloText />
      {catalog ?
        catalog.map((catalog, index) => {
          return (
            <Link to={'/catalog/' + catalog.id + index} key={catalog.id}>
              <CatalogBlock text={catalog.name} img={catalog.image}/>
            </Link>
          )
        })
        :
        <Loader/>}
    </div>
  )
}

export default Catalogs;