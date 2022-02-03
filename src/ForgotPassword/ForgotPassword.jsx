import { Link } from "react-router-dom";
import "./ForgotPassword"
const ForgotPassword = ()=>{
    return(
        <div className="main">
            <p>Пока этой страницы нет :(</p>  
            <Link to="/Login">Войти</Link>
        </div>
    )
}

export default ForgotPassword;