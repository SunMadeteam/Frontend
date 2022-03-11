import './index.scss';
import TitleEighteen from './../../common/components/Title-eighteen/index';
import WideButton from '../../common/components/Wide-white-button';
import Header from './../../common/components/Header/index';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CartDescription = () => {

  const [flower, setFlower] = useState('');
  const URL_FLOWER_DESCRIPTION = 'https://sunmadebackend.herokuapp.com/products/'
  const productId = useLocation().pathname.substring(17)

  useEffect(() => {
    getFlowersDescription(productId);
  }, []);
  const getFlowersDescription = async (productId) => {
    const req = await fetch(URL_FLOWER_DESCRIPTION + productId);
    const res = await req.json();
    console.log(res);
    setFlower(res);
  };

  return (
    <div>
      <div>
        <img 
        src={flower.image}
         alt="" />
        <div className='header_cart'>
          <Header />
        </div>
      </div>
      
      <div className='description container'>
        <p className='title'>{flower.name}</p>
        <p className='price'>{flower.price} c</p>
        <span>Описание</span>
        <TitleEighteen title={
          (flower.complexity_of_care === 1 ) ? 'Сложность ухода - легкая':
          (flower.complexity_of_care === 2 ) ? 'Сложность ухода - средняя' : 
          (flower.complexity_of_care === 3 ) ? 'Сложность ухода - сложная' : ''
        } 



        />
        <p className='big_description'>
          {flower.description ? flower.description:'описание отсутствует'}
        </p>
        <WideButton word="КУПИТЬ" />
      </div>
    </div>
  )
}

export default CartDescription;