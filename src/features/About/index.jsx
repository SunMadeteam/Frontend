import './index.scss';
import Header from './../../common/components/Header/index';
import whatsapp from './img/whatsapp.svg';
import telegram from './img/telegram.svg';
import instagram from './img/instagram.svg';
import TitleEighteen from './../../common/components/Title-eighteen/index';

const About = () => {
  return (
    <div className='about'>
      <Header />
      <div className="about-body container">
        <h2>О нас</h2>
        <p className='contacts'>Контакты</p>
        <div className='social-media'>
          <div className='whatsapp'>
            <img src={whatsapp} alt="" />
            <TitleEighteen title="WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;