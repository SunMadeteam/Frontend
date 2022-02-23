import monstera from './img/Monstera.png'
import './index.scss'
import TitleEighteen from './../../common/components/Title-eighteen/index';
import WideButton from '../../common/components/Wide-white-button';
import Header from './../../common/components/Header/index';

const CartDescription = () => {
  return (
    <div>
      <div>
        <img src={monstera} alt="" />
        <div className='header_cart'>
          <Header />
        </div>
      </div>
      
      <div className='description container'>
        <p className='title'>Монстера</p>
        <p className='price'>3500 c</p>
        <span>Описание</span>
        <TitleEighteen title="Сложность ухода - легкий" />
        <p className='big_description'>
        Вечнозеленые растения, лианы, кустарники с лазящими толстыми стеблями, часто свисающими воздушными корнями. Листья крупные, кожистые. Черешок длинный, у основания — влагалищный.
        </p>
        <WideButton word="КУПИТЬ" />
      </div>
    </div>
  )
}

export default CartDescription;