import './index.scss';
import banner from './banner-photo.png'

const Banner = () => {
  return (
    <div className="banner container">
      <img src={banner} alt="" />
      <div>
        <p>Твой большой и зеленый уголок</p>
      </div>
    </div>
  )
}

export default Banner;