import { Routes, Route } from 'react-router-dom';
import FooterMenu from './common/components/Footer-menu';
import MainPage from './features/Main-page';
import Registration from './features/Registration';
import RegistrationConfirmationCode from './features/Registration-confirmation-code';
import Authorization from './features/Authorization';
import Catalog from './features/Catalogs';
import Shopping from './features/Shopping';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/personal' element={<Registration/>} />
        <Route path='confirmation' element={<RegistrationConfirmationCode />} />
        <Route path='/auth' element={<Authorization/>} />
        <Route path='/catalogs' element={<Catalog />} />
        <Route path='/shopping' element={<Shopping />} />
      </Routes>
      <FooterMenu />
      <hr />      
    </div>
  );
}

export default App;
