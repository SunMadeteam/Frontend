import './index.scss';
import ProductCart from './../../common/components/Product-cart/index';
import Loader from './../../common/components/Loader/Loader';
import { useSelector } from 'react-redux';
import Header from './../../common/components/Header/index';

const Favorite = () => {
  const favorite = useSelector(state=> state.favorite.favorite)
  return (
    <div className="favorite ">
      <Header position={true}/>
      <div className='container catalog-wrapper '>
      {
        (favorite && favorite?.length !== 0) ? (
          favorite?.map((catalog , index) => (
            <ProductCart key={index}  base={catalog} like={true}/>
          ))
        ) : (favorite === null) ? (
            <div className='loader'>
              <Loader />
            </div>
        ) : (
          <>Избранных нет</>
        )
      }
     
      </div>
    </div>
  )
}

export default Favorite;