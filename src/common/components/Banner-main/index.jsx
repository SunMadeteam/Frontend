import './index.scss';
import banner from './banner-photo.png'
import overlay from './gradient-black.png'

const Banner = () => {
  return (
    <div className='banner_container container'>
      <div className="banner ">
        <img src={banner} alt="" />
      </div>
        <div className='banner_overlay '>
          <img src={overlay} alt="" />
      </div>
      <p>Твой большой и <br /> зеленый уголок</p>
    </div>
  )
}

export default Banner;