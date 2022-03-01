import React from 'react'
import "./ModalClient.scss"
export const ModalClient = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
        <div className='modal_content' onClick={e=>e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}
