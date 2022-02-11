import React from 'react'
import { OrderInfo } from './OrderInfo/OrderInfo'
import { OrdersCheck } from './OrdersCheck/OrdersCheck'
const NewOrders = () => {
  return (
    <div>
        <OrdersCheck/>
        <OrderInfo/>
    </div>
  )
}

export default NewOrders
