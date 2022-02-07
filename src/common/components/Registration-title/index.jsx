import './index.scss';

const RegistrationTitle = ({title, underTitle}) => {
  return (
    <div className='registration_title'>
      <h2> {title} </h2>
      <p> {underTitle} </p>
    </div>
  )
}

export default RegistrationTitle;