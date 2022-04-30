import ProductCart from '../Product-cart';
import './index.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Loader/Loader';

const AllProductCarts = () => {
  const url_base_name = 'https://sunmadebackend.herokuapp.com/api/products/'
  const [base , setBase] = useState(null)
  const [modal , setModal] = useState(false)
  
  useEffect(() => {
    getBase(url_base_name)
  }, [])

  function getBase(url){
    fetch(url)
    .then(res => res.json())
    .then(res => setBase(res.results))
  }

  

  // console.log(base)
  return (
    <div className='all_product_cart'>
     <div className ={modal?'modal-basket ':'modal-basket modal-basket_none'}>
      Товар добавлен в корзину
    </div>
       {
        (base && base?.length !== 0) ? (
          base?.map((item , index) => (
            <ProductCart key={index}  base={item} setModal={setModal}/>
          ))
        ) : (base === null) ? (
          <Loader />
        ) : (
          <>Database undefined</>
        )
      }
    </div>
  )
}

export default AllProductCarts;