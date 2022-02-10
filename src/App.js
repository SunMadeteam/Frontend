
import FooterMenu from './common/components/Footer-menu';
import MainPage from './features/Main-page';
import Registration from './features/Registration';
import RegistrationConfirmationCode from './features/Registration-confirmation-code';


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
