import React from 'react'
import {AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'
import {BsTelegram,BsTelephone} from 'react-icons/bs'
import {ImPencil} from 'react-icons/im'
import './AboutUsContact.scss'
import { NavLink } from 'react-router-dom'
export const AboutUsContact = () => {
  return (
    <div>
        <div className='contact'>
                <div className='contact_whatsapp'>
                    <div>
                        <AiOutlineWhatsApp/>
                        <h3>WhatsApp</h3>
                        <ImPencil/>
                    </div>
                    <p>+966 000 111 111</p>
                </div>

                <div className='contact_telegram'>
                    <div>
                        <BsTelegram/>
                        <h3>Telegram</h3>
                        <ImPencil/>
                    </div>
                    <p>+966 000 111 111</p>
                </div>

            <div className='contact_instagram'>
                <div>
                    <AiOutlineInstagram/>
                    <h3>@SunMade</h3>
                    <ImPencil/>
                </div>
            </div>

            <div className='contact_phone'>
                <div>
                    <BsTelephone/>
                    <h3>+966 000 111 111</h3>
                    <ImPencil/>
                </div>
            </div>
        </div>
        <div className="adress_btn"><NavLink to="/AboutUsRoute/AboutUsContact">Адрес</NavLink></div>
        <div className='adress'>
            <div>
                <div className='adress_branch'>
                    <div>
                        <BsTelephone/>
                        <h3>г. Бишкек, Байтик Батыра 49.</h3>
                        <ImPencil/>
                    </div>
                </div>
                <div className='adress_branch'>
                    <div>
                        <BsTelephone/>
                        <h3>г. Бишкек, Манаса 47.</h3>
                        <ImPencil/>
                    </div>
                </div>
                <div className='adress_branch'>
                    <div>
                        <BsTelephone/>
                        <h3>г. Бишкек, проспект чуй 147/1.</h3>
                        <ImPencil/>
                    </div>
                </div>
            </div>
            <div className='img_adress'></div>
        </div>
    </div>
  )
}
