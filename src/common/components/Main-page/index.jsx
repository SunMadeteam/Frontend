import './index.scss'
import Banner from "../Banner-main";
import HelloText from "../Hello-text";
import SearchInput from '../Search-input';

const MainPage = () => {
  return (
    <div className='container'>
      <HelloText />
      <Banner />
      <SearchInput />
    </div>
  )
}

export default MainPage;