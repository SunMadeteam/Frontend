import React from 'react'
import NewOrders from './NewOrders/NewOrders'
import ProcessedOrders from './ProcessedOrders/ProcessedOrders'
import CompletedOrders from './CompletedOrders/CompletedOrders'
import {Route,Routes} from 'react-router-dom'
import { OrdersBtn } from './OrdersBtn/OrdersBtn'
const OrdersRoute = () => {
  return (
    <div>
        <OrdersBtn/>
            <Routes>
                <Route path="/NewOrders" element={<NewOrders/>}/>
                <Route path="/ProcessedOrders" element={<ProcessedOrders/>}/>
                <Route path="/CompletedOrders" element={<CompletedOrders/>}/>
            </Routes>
    </div>
  )
}

export default OrdersRoute;