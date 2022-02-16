import React,{useState} from 'react'
import {Text3} from './Text3'
import {Status3} from './Status3'

const Info3 = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
       setOpen(!open)
}   
  return (
    <div>
        {
         (open===false)?
        <button onClick={toggle} className="processed_info"><Text3 /></button>
            :
        <button onClick={toggle} className="proc_info"><Status3 /></button>
        }
    </div>
  )
}

export default Info3