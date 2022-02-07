import { Link } from "react-router-dom"
import "./HomePage.css"
const HomePage =()=>{
    return(
        <div className="main">
             <p> HELLO!!</p>
            <Link to="/Login">Войти</Link>
        </div>
    )
}
export default HomePage