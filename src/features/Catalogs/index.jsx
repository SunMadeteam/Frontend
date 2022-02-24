import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HelloText from '../../common/components/Hello-text';
import garden from './img/garden.png';
import home from './img/home.png';
import present from './img/present.png';
import ground from './img/ground.png';
import nutrition from './img/nutrition.png';
import accessories from './img/accessories.png';
import './index.scss';
import CatalogBlock from './../../common/components/Catalog-block/index';



const Catalogs = () => {
  const URL_CATALOG = 'https://www.themealdb.com/api/json/v1/1/categories.php'
  const [catalog, setCatalog] = useState('')

  useEffect(() => {
    getCatalog()
  }, [])

  const getCatalog = async () => {
    const req = await fetch(URL_CATALOG)
    const resp = await req.json()
    setCatalog(resp.categories)
  }
  return (
    <div className='container'>
      <HelloText />
      {catalog ?

        catalog.map((catalog, index) => {
          return (
            <Link to={'/catalog/' + catalog.strCategory} key = {catalog.idCategory}> {<CatalogBlock text={catalog.strCategory} img={catalog.strCategoryThumb} />} </Link>

          )
        })
        :
        <h3>pusto</h3>}
    </div>
  )
}

export default Catalogs;