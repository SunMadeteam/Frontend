import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainFooter.scss'

export const MainFooter = () => {
  return (
    <footer className='footer_back'>
        <div className='footer_text'>
            <h2>Контактные номера, соц. сети и адреса филиалов</h2>
            <div className='footer_text__flex'>

                <div className='footer_adress__flex'>
                    <div className='footer_adress'>
                        <div className='footer_location__img'></div>
                        <p>г. Бишкек, Байтик Батыра 49</p>
                    </div>
                    <div className='footer_adress'>
                    <div className='footer_location__img'></div>
                        <p>г. Бишкек, Манаса 47</p>
                    </div>
                    <div className='footer_adress'>
                    <div className='footer_location__img'></div>
                        <p>г. Бишкек, проспект Чуй 147/1</p>
                    </div>
                </div>

                <div className='footer_contact__flex'>
                    <div className='footer_contact'>
                        <div className='footer_whatsapp__img'></div>
                        <p>WhatsApp</p>
                    </div>
                    <div className='footer_contact'>
                        <div className='footer_instagram__img'></div>
                        <p>@SunMade</p>
                    </div>
                    <div className='footer_contact'>
                        <div className='footer_telegram__img'></div>
                        <p>Telegram</p>
                    </div>
                    <div className='footer_contact'>
                        <div className='footer_phone__img'></div>
                        <p>+966 000 111 111</p>
                    </div>
                    <div >
                            <NavLink to="/HomePage/AboutUsRoute/AboutUsContact" className='footer_box__link'><p>ПЕРЕЙТИ</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
