import React,{useState} from 'react'
// import { WindowEdit } from '../WindowEdit/WindowEdit'
import './WindowDelete.scss'

export const WindowDelete = () => {
const [open, setOpen] = useState(false)

const foggle=()=>{
        setOpen(!open)
} 
  return (
    <div>
        {
           (open===false)? <div onClick={foggle}><p style={{marginBottom:"20px"}}>Удалить</p></div>
           :
            <div className='window_delete'>
                {/* <WindowEdit/> */}
                <p>Удалить</p>
                <span>Вы точно хотите удалить?</span>
                <button>Да</button>
                <button onClick={foggle} className="button_no">Нет</button>
            </div>
        }
    </div>
  )
}
