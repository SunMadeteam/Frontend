import React from 'react'
import { CompletedCheck } from './CompletedCheck/CompletedCheck';
import CompletedInfo from './CompletedInfo/CompletedInfo';

export const CompletedOrders = () => {
  return (
    <div>
        <CompletedCheck/>
        <CompletedInfo/>
    </div>
  )
}
export default CompletedOrders;