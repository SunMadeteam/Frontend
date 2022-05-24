import './index.scss';
import '../../components/global.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProductAction } from '../../../redux/busket/busketRuduser';

const ShoppingCart = ({product, setTotal, total}) => {
  
  const [things, setThings] = useState(1)
  const [summ,setSumm] =useState(product.price)
  const dispatch = useDispatch()

  const pricePlus =()=>{
    setThings(things +1)
    setSumm(summ + product.price)
    setTotal(total + product.price)

  }
  const priceMinus =()=>{
    
    if(things>1){
      setThings(things -1)
      setSumm(summ - product.price)
      setTotal(total - product.price)
    }else{
      dispatch(removeProductAction({id:product.id}))
      setTotal(total - summ)
    }
    

  }
  return (
    <div className='flex shopping__cart'>
      <div className="shopping__cart-left">
        <img src={product.image} alt="" />
      </div>
      <div className="flex shopping__cart-middle">
        <div className="shopping__subtitle">
          {product.name}
        </div>
        <div className="price">
          {product.price} с
        </div>
      </div>
      <div className="flex shopping__cart-right">
        <div className="shopping__cart-summ">{summ} c</div>
        <div className="flex shopping__cart-count ">
        <div className='plus_mines'>
          <button onClick={()=>pricePlus()}> <p> + </p> </button>
        </div>
          <div className="shopping__cart-thing">
            {things}
          </div>
          <div className='plus_mines'>
            <button onClick={()=>priceMinus()}> <p> - </p> </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;