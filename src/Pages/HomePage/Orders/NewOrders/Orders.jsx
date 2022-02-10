import React from 'react'
import { OrderInfo } from './OrderInfo/OrderInfo'
import { OrdersCheck } from './OrdersCheck/OrdersCheck'
const Orders = () => {
  return (
    <div className='orders_none'>
        <OrdersCheck/>
        <OrderInfo/>
    </div>
  )
}

export default Orders
