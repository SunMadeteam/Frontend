import './index.scss'
import Banner from "../Banner-main";
import HelloText from "../Hello-text";
import Sorting from '../Sorting';

const MainPage = () => {
  return (
    <div className='container'>
      <HelloText />
      <Banner />
      <Sorting />
    </div>
  )
}

export default MainPage;