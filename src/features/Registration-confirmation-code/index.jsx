import React, { useState } from "react";
import BackButton from "../../common/components/Back-button";
import RegistrationTitle from "../../common/components/Registration-title";
import InputCode from "../../common/components/Input-code";
import WideWhiteButton from "../../common/components/Wide-white-button";
import "./index.scss";
import './index.css';

const RegistrationConfirmationCode = () => {

  const [loading, setLoading] = useState(false);

  return (
    <div className="registration_confirmation_code container">
      <BackButton />
      <RegistrationTitle 
      title = "Код подтверждения"
      underTitle = "Код был отправлен на: 0700 123 456"/>
       <InputCode
        length={4}
        loading={loading}
        onComplete={code => {
          setLoading(true);
          setTimeout(() => setLoading(false), 10000);
        }}
      />
      <WideWhiteButton word="ПРОДОЛЖИТЬ" />
      <WideWhiteButton word="ОТПРАВИТЬ ПОВТОРНО" />
      <p>59 сек</p>
    </div>
  )
}

export default RegistrationConfirmationCode;