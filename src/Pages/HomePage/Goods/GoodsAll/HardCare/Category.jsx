import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import './Category.scss'
export const Category = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
  }   
  const product = useSelector(state => state.Goods.product)
 
  return (
    <div className='category_position'>
    {(open===false)?
        <div className='category_flex'>
            <h3>Категории</h3>  
            <div onClick={toggle} className="category_vector__img"></div>
        </div>
        :
        <div>
            <div className='category_flex'>
                <h3>Категории</h3>
                <div onClick={toggle} className="category_vector__img2"></div>
            </div>
            <div className='category_flex1'>
                <p>Популярные</p>
                <input 
                checked={product.category===1 ? true: false}
                type="radio"/>
            </div>
            <div className='category_flex1'>
                <p>Сад</p>
                <input 
                // value={product.category}
                checked={product.category===2 ? true: false}
                type="radio"/>
            </div>
            <div className='category_flex1'>
                <p>Дом</p>
                <input 
                checked={product.category===3 ? true: false}
                type="radio"/>
            </div>
            <div className='category_flex1'>
                <p>Для подарка</p>
                <input 
                checked={product.category===4 ? true: false}
                type="radio"/>
            </div>
            <div className='category_flex1'>
                <p>Почта</p>
                <input 
                checked={product.category===5 ? true: false}
                type="radio"/>
            </div>
            <div className='category_flex1'>
                <p>Питание</p>
                <input 
                checked={product.category===6 ? true: false}
                type="radio"/>
            </div>
            <div className='category_flex1'>
                <p>Аксессуары</p>
                <input 
                checked={product.category===7 ? true: false}
                type="radio"/>
            </div>

        </div>
    } 
</div>
  )
}
