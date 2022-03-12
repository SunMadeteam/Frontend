import React, { useState, useRef } from "react";
import './index.scss';
import WideWhiteButton from './../Wide-white-button/index';
import { RecaptchaVerifier } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { signInWithPhoneNumber } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const InputCode = ({ length, loading, onComplete }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);
  const [value , setValue] = useState('')
  const [btnType , setBtnType] = useState('')
  const auth = getAuth()

  function generateRecatcha(){
    window.recaptchaVerifier = new RecaptchaVerifier('recatcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }
  const processInput = (e, slot) => {
    setValue(e.target.value)
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every(num => num !== "")) {
      onComplete(newCode.join(""));
    }
  };
  const verifyCode = (e) =>{
      e.preventDefault()
      console.log('continue')
      if(value.length === 6){
        let confirmResult = window.confirmationResult
        confirmResult.confirm(value).then(res => {
          const user = res.user
        })
      }
      setValue('Продолжить')
  }


  const sendRepeat = (e) => {
    e.preventDefault()
    setValue('Отправить повторно')
    generateRecatcha()    
      const phone = localStorage.getItem('phone')

      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(auth , phone , appVerifier )
      .then(confirms =>{
        console.log(confirms)
        window.confirmationResult = confirms 
      }).catch((error) => {
        console.log(error)
      });
  }

  const KEYS_CODE = {
    BACKSPACE: 8
    }

  const onKeyUp = (e, slot) => {
    if (e.keyCode === KEYS_CODE.BACKSPACE && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className="code-input">
      <div className="code-inputs registration_validation_inputs">
        {code.map((num, idx) => {
          return (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              readOnly={loading}
              onChange={e => processInput(e,idx)}
              onKeyUp={e => onKeyUp(e, idx)}
              ref={ref => inputs.current.push(ref)}
            />
          );
        })}
      </div>
      <Link to='/'> <WideWhiteButton verify={verifyCode} word={value} text="Продолжить" /> </Link>
      <WideWhiteButton word={value} verify={sendRepeat}  text="Отправить повторно"/>
      
    </div>
  );
};

export default InputCode;
