import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { usertype } from '../../../../Store/Actions/Action'
import { registerStaff } from '../../../../Store/AsyncAction/registerStaff'
import './AddInfo.scss'

export const AddInfo = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
  }   
  const dispatch = useDispatch()
  const [radioInput, setRadioInput] = useState({
    usertype:"",
  });
  const onChange = (type, value) => {
    setRadioInput({
      ...radioInput,
      [type]: value,
    });
    dispatch(usertype(radioInput))
    console.log(radioInput)
  };
  
  return (
    <div className='add_usertype'>
        {(open===false)?
            <div className='add_flex'>
                <h3>Должность</h3>  
                <div onClick={toggle} className="add_vector__img"></div>
            </div>
            :
            <div>
                <div className='add_flex'>
                    <h3>Должность</h3>
                    <div onClick={toggle} className="add_vector__img2"></div>
                </div>
                <div className='add_flex1'>
                    <p>Админ</p>
                    <input type="radio" name='radio' value="1" 
                    // checked={value=="2"?true:false}
                    onChange={(e) => onChange("usertype", e.target.value = "admin")}/>
                </div>
                <div className='add_flex1' >
                    <p>Курьер</p>
                    <input type="radio" name='radio' value="2" 
                    // checked={value=="2"?true:false}
                    onChange={(e) => onChange("usertype", e.target.value = "runner")}/>
                </div>
                <div className='add_flex1'>
                    <p>Флорист</p>
                    <input type="radio" name='radio' value="3"
                    // checked={value=="2"?true:false}
                    onChange={(e) => onChange("usertype", e.target.value = "florist")}/>
                </div>
            </div>
        } 
    </div>
  )
}
