import monstera from './img/Monstera.png'
import './index.scss'
import TitleEighteen from './../../common/components/Title-eighteen/index';
import WideButton from '../../common/components/Wide-white-button';
import Header from './../../common/components/Header/index';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CartDescription = () => {
  const [flower, setFlower] = useState('');
  const URL_FLOWER_DESCRIPTION = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  const flowersName = useLocation().pathname.substring(17)

  useEffect(() => {
    getFlowersDescription(flowersName);
    console.log(flowersName);
  }, []);
  const getFlowersDescription = async (flowersName) => {
    const req = await fetch(URL_FLOWER_DESCRIPTION + flowersName);
    const res = await req.json();
    setFlower(res.meals[0]);
    console.log(res.meals);

  };

  return (
    <div>
      <div>
        <img src={flower.strMealThumb} alt="" />
        <div className='header_cart'>
          <Header />
        </div>
      </div>
      
      <div className='description container'>
        <p className='title'>{flower.strMeal}</p>
        <p className='price'>3500 c</p>
        <span>Описание</span>
        <TitleEighteen title="Сложность ухода - легкий" />
        <p className='big_description'>
        {flower.strInstructions ? flower.strInstructions.substring(0,200) + '...':'описание отсутствует'}
        </p>
        <WideButton word="КУПИТЬ" />
      </div>
    </div>
  )
}

export default CartDescription;