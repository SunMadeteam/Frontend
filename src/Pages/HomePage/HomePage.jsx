import { Route,Routes } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import AddBtn from "./AddBtn/AddBtn"
import "./HomePage.css"
import { SearchInput } from "./SearchInput/SearchInput"
import UserBtn from "./UserBtn/UserBtn"
import NewOrders from "./Orders/NewOrders/NewOrders"
import { OrdersBtn } from "./OrdersBtn/OrdersBtn"
import ProcessedOrders from './Orders/ProcessedOrders/ProcessedOrders'
import CompletedOrders from "./Orders/CompletedOrders/CompletedOrders"
import CanceledOrders from "./Orders/CanceledOrders/CanceledOrders"
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
                <Routes>
                    <Route path="/NewOrders" element={<NewOrders/>}/>
                    <Route path="/ProcessedOrders" element={<ProcessedOrders/>}/>
                    <Route path="/CompletedOrders" element={<CompletedOrders/>}/>
                    <Route path="/CanceledOrders" element={<CanceledOrders/>}/>
                </Routes>
             </div>
        </div>
    )
}
export default HomePage;