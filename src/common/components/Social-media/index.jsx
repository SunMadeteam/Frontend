import TitleEighteen from '../Title-eighteen';
import './index.scss';

const SocialMedia = ({icon, title}) => {
  return (
    <div className='social-media'>
          <div className='social_wrap'>
            <img src={icon} alt="" />
            <TitleEighteen title={title} />
          </div>
        </div>
  )
}

export default SocialMedia;