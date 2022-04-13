import './index.scss';
import '../../components/global.scss'

import earth from './img/earth.png'
import PlusMinus from '../Plus-minus-button';

const ShoppingCart = () => {
  return (
    <div className='flex shopping__cart'>
      <div className="shopping__cart-left">
        <img src={earth} alt="" />
      </div>
      <div className="flex shopping__cart-middle">
        <div className="shopping__subtitle">
          Листовая земля
        </div>
        <div className="price">
          400 с
        </div>
      </div>
      <div className="flex shopping__cart-right">
        <div className="shopping__cart-summ">1200 c</div>
        <div className="flex shopping__cart-count ">
        <div className='plus_mines'>
          <button> <p> + </p> </button>
        </div>
          <div className="shopping__cart-thing">
            3
          </div>
          <div className='plus_mines'>
            <button> <p> - </p> </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;