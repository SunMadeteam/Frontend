import React,{useState} from 'react'
import './ThreeDots.scss'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { WindowDelete } from './WindowDelete/WindowDelete'
import { WindowEdit } from './WindowEdit/WindowEdit'
export const ThreeDots = () => {
const [open, setOpen] = useState(false)

const toggle=()=>{
        setOpen(!open)
} 
  return (
    <div>
        {
            (open===false)?
            <div className='three_dot'><BsThreeDotsVertical onClick={toggle}/></div>
            :
            <div className='window' onClick={toggle}>
                <div><WindowEdit /></div>
                <div><WindowDelete/></div>
            </div>

        }
    </div>
  )
}
