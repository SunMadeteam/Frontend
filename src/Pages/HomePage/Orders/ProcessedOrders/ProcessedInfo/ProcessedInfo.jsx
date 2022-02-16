import React, {useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import "./ProcessedInfo.scss"
import Status1 from './Status1'
import Status2 from "./Status2"
import Text1  from './Text1'
import Info2 from './Info2'
import Info3 from './Info3'
const ProcessedInfo = () => {
    const [open, setOpen] = useState(false)

     const toggle=()=>{
        setOpen(!open)
}   
  
  return (
    <div>
    <div>
        {
         (open===false)?
        <button onClick={toggle} className="processed_info"><Text1 /></button>
            :
        <button onClick={toggle} className="proc_info"><Status1 /></button>
        }
    </div>
        <Info2/>
        <Info3/>
    </div>
  )
}

export default ProcessedInfo;
