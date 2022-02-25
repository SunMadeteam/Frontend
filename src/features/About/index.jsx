import './index.scss';
import Header from './../../common/components/Header/index';
import whatsapp from './img/whatsapp.svg';
import telegram from './img/telegram.svg';
import instagram from './img/instagram.svg';
import SocialMedia from '../../common/components/Social-media';
import WideButton from './../../common/components/Wide-button';

const About = () => {
  return (
    <div className='about'>
      <Header />
      <div className="about-body container">
        <h2>О нас</h2>
        <p className='contacts'>Контакты</p>
        <SocialMedia icon={whatsapp} title='WhatsApp' />
        <SocialMedia icon={telegram} title='Telegram' />
        <SocialMedia icon={instagram} title='@SunMade' />
        <WideButton word="+996 555 234 568" />
      </div>
    </div>
  )
}

export default About;