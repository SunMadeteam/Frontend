import React,{useState} from 'react'
import Text2 from './Text2'
import Status2 from './Status2'

const Info2 = () => {
    const [open, setOpen] = useState(false)

    const toggle=()=>{
       setOpen(!open)
}   
  return (
    <div>
        {
         (open===false)?
        <button onClick={toggle} className="processed_info"><Text2 /></button>
            :
        <button onClick={toggle} className="proc_info"><Status2 /></button>
        }
    </div>
  )
}

export default Info2
