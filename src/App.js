
import FooterMenu from './common/components/Footer-menu';
import MainPage from './common/components/Main-page';
import Registration from './common/components/Registration';
import RegistrationConfirmationCode from './common/components/Registration-confirmation-code';


function App() {
  return (
    <div>
      <MainPage />
       <FooterMenu />
       <Registration />
       <RegistrationConfirmationCode />
       <hr/>
    </div>
  );
}

export default App;
