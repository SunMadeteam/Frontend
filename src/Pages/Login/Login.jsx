import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss"
import {AiOutlineEye} from "react-icons/ai"
import {RiEyeCloseLine} from "react-icons/ri"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PostLogin } from "../../Store/AsyncAction/loginAsync";
import { LoginFail } from "./LoginFail";

const Login =()=>   {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
}   
    
const [form, setForm] = useState({
    number: '',
    password: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const fail = useSelector(state => state.Failure)
  const onChange = (type, value) => {
    switch (type) {
      case 'login':
        setForm({
          ...form,
          number: value
        })
        break;
      case 'password':
        setForm({
          ...form,
          password: value
        })
        break;
      default:
        break;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('signin', form)
    dispatch(PostLogin(form,navigate))
  }
    return (
        <div className="Auth_content Auth_back">
          
            <div className="Auth">
                <form className="Auth_form" onSubmit={onSubmit}>
                <h2 className="hello">Привет!</h2>
                    <label className="Auth_label label_margin">Логин</label>
                        <input className="Auth_input Auth_input_login" 
                          placeholder="Введите логин"
                          onChange={(e)=>onChange('login', e.target.value)}
                          required
                        />
                        <label className="Auth_label">Пароль</label>

                        <input className="Auth_input Auth_input_pass"
                          placeholder="Введите пароль"
                          type={(open===false)?"password":"text"}
                          onChange={(e) => onChange('password', e.target.value)}
                          required
                        />
                        <div className="Auth_eye">
                            {
                                (open===false)?<RiEyeCloseLine onClick={toggle}/>:
                                <AiOutlineEye onClick={toggle}/>
                            }
                        </div>
                    <button className="Auth_button" type="submit"> ПРОДОЛЖИТЬ </button>
                </form>
                
            </div>
        </div>
    )
}

export default Login