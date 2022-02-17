import { Route,Routes } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import AddBtn from "./AddBtn/AddBtn"
import "./HomePage.scss"
import { SearchInput } from "./SearchInput/SearchInput"
import UserBtn from "./UserBtn/UserBtn"
import OrdersRoute from "./Orders/OrdersRoute"
import { GoodsRoute } from "./Goods/GoodsRoute"

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
                <Routes>
                    <Route path="/OrdersRoute/*" element={<OrdersRoute/>}/>
                    <Route path="/GoodsRoute/*" element={<GoodsRoute/>}/>
                </Routes>
             </div>
        </div>
    )
}
export default HomePage;