import { Link } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import AddBtn from "./AddBtn/AddBtn"
import "./HomePage.css"
import { SearchInput } from "./SearchInput/SearchInput"
import UserBtn from "./UserBtn/UserBtn"
import Orders from "./Orders/NewOrders/Orders"
import { OrdersBtn } from "./OrdersBtn/OrdersBtn"
const HomePage =()=>{
    return(
        <div className="main">
             <Menu/>
             <div className="home_content">
                 <div className="header">
                    <SearchInput />
                    <AddBtn/>
                    <UserBtn/>
                 </div>
                <OrdersBtn/>
                <Orders/>
             </div>
        </div>
    )
}
export default HomePage;