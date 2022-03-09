import './index.scss';
import right from './img/right.svg';
import HelloText from './../../common/components/Hello-text/index';

const PersonalArea = () => {
  return (
    <div className = 'personal_area container'>
      <HelloText />
      <div className='personal_buttons'>
        <div className='history'>
          <p>История заказов</p>
            <div className='count'>2</div>
            <img src={right} alt='' />
        </div>
      </div>
      <div className='personal_buttons'>
        <div className='history'>
          <p>О нас</p>
          <img src={right} alt='' />
        </div>
      </div>
      <div className='personal_buttons'>
        <div className='history'>
          <p>Выйти из профиля</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalArea;