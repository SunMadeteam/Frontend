import React, { useState } from "react";
import BackButton from "../../common/components/Back-button";
import RegistrationTitle from "../../common/components/Registration-title";
import InputCode from "../../common/components/Input-code";
import WideWhiteButton from "../../common/components/Wide-white-button";
import "./index.scss";

const RegistrationConfirmationCode = () => {

  const [loading, setLoading] = useState(false);
  let user_number = localStorage.getItem('phone');
  return (
    <div className="registration_confirmation_code container">
      <BackButton />
      <RegistrationTitle 
      title = "Код подтверждения"
      underTitle = 'Код был отправлен на:'
      number = {user_number}
      />
       <InputCode
        length={6}
        loading={loading}
        onComplete={code => {
          setLoading(true);
          setTimeout(() => setLoading(false), 10000);
        }}
      />
      <p>59 сек</p>
    </div>
  )
}

export default RegistrationConfirmationCode;