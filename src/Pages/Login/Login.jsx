import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import {AiOutlineEye} from "react-icons/ai"
import {RiEyeCloseLine} from "react-icons/ri"
import { useState } from "react";
const Login =()=>   {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
        setOpen(!open)
    }   

    return (
        <div className="Auth_content Auth_back">
            <div className="Auth">
                <form className="Auth_form">
                <h2>Привет!</h2>
                    <label className="Auth_label label_margin">Логин</label>
                        <input className="Auth_input Auth_input_login" 
                        placeholder="Введите логин"/>

                        <label className="Auth_label">Пароль</label>

                        <input className="Auth_input Auth_input_pass"
                        placeholder="Введите пароль"
                        type={(open===false)?"password":"text"}/>

                        <div className="Auth_eye">
                            {
                                (open===false)?<RiEyeCloseLine onClick={toggle}/>:
                                <AiOutlineEye onClick={toggle}/>
                            }
                        </div>
                    <button className="Auth_button">ПРОДОЛЖИТЬ</button>
                    <p> <Link to="/"></Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Login