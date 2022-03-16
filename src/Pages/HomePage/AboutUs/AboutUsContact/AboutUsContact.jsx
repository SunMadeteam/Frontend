import React from 'react'
import {AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {RiTelegramLine} from 'react-icons/ri'
import {ImPencil} from 'react-icons/im'
import {IoLocationOutline} from 'react-icons/io5'
import './AboutUsContact.scss'
import { NavLink } from 'react-router-dom'
export const AboutUsContact = () => {
    const setSecondActive=({isActive})=>isActive?'secondActive_btn__link':'second_btn__link';
  return (
    <div>
        <div className='contact'>
                <div className='contact_whatsapp'>
                    <div>
                        <div className='whatsapp_img'></div>
                        <h3>WhatsApp</h3>
                        <div className='pencil_img'></div>
                    </div>
                    <p>+966 000 111 111</p>
                </div>

                <div className='contact_telegram'>
                    <div>
                        <div className='telegram_img'></div>
                        <h3>Telegram</h3>
                        <div className='pencil_img'></div>
                    </div>
                    <p>+966 000 111 111</p>
                </div>

            <div className='contact_instagram'>
                <div>
                    <div className='instagram_img'></div>
                    <h3>@SunMade</h3>
                    <div className='pencil_img'></div>
                </div>
            </div>

            <div className='contact_phone'>
                <div>
                    <div className='phone_img'></div>
                    <h3>+966 000 111 111</h3>
                    <div className='pencil_img'></div>
                </div>
            </div>
        </div>

       <div className='about_us'>
           <NavLink to="/HomePage/AboutUsRoute/AboutUsContact" className={setSecondActive}><p>Адреса</p></NavLink>
           {/* <div className='plus'></div> */}
        </div>

        <div className='adress'>
            <div>
                <div className='adress_branch'>
                    <div>
                        <IoLocationOutline/>
                        <h3>г. Бишкек, Байтик Батыра 49.</h3>
                        <div className='three_dot__img'></div>
                    </div>
                </div>
                <div className='adress_branch'>
                    <div>
                        <IoLocationOutline/>
                        <h3>г. Бишкек, Манаса 47.</h3>
                        <div className='three_dot__img'></div>
                    </div>
                </div>
                <div className='adress_branch'>
                    <div>
                        <IoLocationOutline/>
                        <h3>г. Бишкек, проспект чуй 147/1.</h3>
                        <div className='three_dot__img'></div> 
                    </div>
                </div>
            </div>
            <div className='img_adress'></div>
        </div>
    </div>
  )
}
