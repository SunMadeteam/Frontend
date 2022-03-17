import React,{useState} from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'
import './BranchModal.scss'
export const BranchModal = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
  }   
  return (
    <div className='branch_position'>
        {(open===false)?
            <div className='branch_flex'>
                <h3>Филиалы</h3>  
                <div onClick={toggle} className="branch_vector__img"></div>
            </div>
            :
            <div>
                <div className='branch_flex2'>
                    <h3>Филиалы</h3>
                    <div onClick={toggle} className="branch_vector__img2"></div>
                </div>
                <div className='branch_flex1'>
                    <p>Бишкек, Байтик Батыра 49</p>
                    <input type="radio"/>
                </div>
                <div className='branch_flex1'>
                    <p>Бишкек, Манаса 47</p>
                    <input type="radio"/>
                </div>
                <div className='branch_flex1 branch_margin'>
                    <p>Бишкек, проспект чуй 147/1</p>
                    <input type="radio"/>
                </div>
            </div>
        } 
    </div>
  )
}