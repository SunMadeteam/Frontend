import React from 'react'
import './index.scss'

export default function Loader() {
    return (
        <div className='loader' style={{height:'80vh',textAlign:'center',}}><div className="lds-ripple"><div></div><div></div></div></div>
    )
}