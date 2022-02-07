import BackButton from "../Back-button";
import RegistrationTitle from "../Registration-title";
import RegistrationValidationInputs from "../Registration-validation-inputs";
import WideTransparentButton from "../Wide-transparent-button";
import WideWhiteButton from "../Wide-white-button";
import "./index.scss";

const RegistrationConfirmationCode = () => {
  return (
    <div className="registration_confirmation_code container">
      <BackButton />
      <RegistrationTitle 
      title = "Код подтверждения"
      underTitle = "Код был отправлен на: 0700 123 456"/>
      <RegistrationValidationInputs />
      <WideTransparentButton number="ПРОДОЛЖИТЬ" />
      <WideWhiteButton word="ОТПРАВИТЬ ПОВТОРНО" />
      <p>59 сек</p>
    </div>
  )
}

export default RegistrationConfirmationCode;