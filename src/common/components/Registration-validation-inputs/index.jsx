import './index.scss'

const RegistrationValidationInputs = () => {
  
  
  return (
    <div className="registration_validation_inputs">
      <input name='first_input' type='number' required />
      <input name='second_input' type='number'required />
      <input name='third_input' type='number' required/>
      <input name='fourth_input' type='number' required/>
    </div>
  )
}

export default RegistrationValidationInputs;