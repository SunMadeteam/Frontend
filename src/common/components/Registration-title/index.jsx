import './index.scss';

const RegistrationTitle = ({title, underTitle, number = ''}) => {
  return (
    <div className='registration_title'>
      <h2> {title} </h2>
      <p> {underTitle} <span>{number}</span></p>
    </div>
  )
}

export default RegistrationTitle;