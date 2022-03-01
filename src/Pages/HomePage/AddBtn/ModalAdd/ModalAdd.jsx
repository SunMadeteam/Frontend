import React from 'react'
import "./ModalAdd.scss"
export const ModalAdd = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal_add active_add" : "modal_add"} onClick={()=>setActive(false)}>
        <div className='modal_content_add' onClick={e=>e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}
