import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
const Login =()=>   {
    return (
    <div className="registr_content">
        <h2>Авторизация</h2>
        <form className="registr_form">
            <input className="registr_input" placeholder="Введите номер телефона"></input>
            <input className="registr_input" placeholder="Введите Пароль"></input>
            <button className="registr_button">ПРОДОЛЖИТЬ</button>
        </form>

        <p>
            <Link to="/ForgotPassword">Забыли пароль?</Link>
        </p>
        <Link to="/">На главную страницу</Link>
    </div>
    )
}

export default Login