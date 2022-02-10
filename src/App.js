import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login/Login"
import HomePage from './Pages/HomePage/HomePage';
import Orders from "./Pages/HomePage/Orders/NewOrders/Orders";
import { OrdersRout } from "./Pages/HomePage/Orders/NewOrders/OrdersRout";
import ProcessedRout from "./Pages/HomePage/Orders/ProcessedOrders/ProcessedRout";
const App=()=> {
  return (
    <div className="container">
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/NewOrder" element={<OrdersRout/>}/>
          <Route path="/ProcessedOrder" element={<ProcessedRout/>}/>
      </Routes>
    </div>
  );
}

export default App;
