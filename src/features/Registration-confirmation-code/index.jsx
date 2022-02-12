import BackButton from "../../common/components/Back-button";
import RegistrationTitle from "../../common/components/Registration-title";
import RegistrationValidationInputs from "../../common/components/Registration-validation-inputs";
import WideWhiteButton from "../../common/components/Wide-white-button";
import "./index.scss";

const RegistrationConfirmationCode = () => {
  return (
    <div className="registration_confirmation_code container">
      <BackButton />
      <RegistrationTitle 
      title = "Код подтверждения"
      underTitle = "Код был отправлен на: 0700 123 456"/>
      <RegistrationValidationInputs />
      <WideWhiteButton word="ПРОДОЛЖИТЬ" />
      <WideWhiteButton word="ОТПРАВИТЬ ПОВТОРНО" />
      <p>59 сек</p>
    </div>
  )
}

export default RegistrationConfirmationCode;