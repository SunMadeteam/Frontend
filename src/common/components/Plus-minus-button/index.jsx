import './index.scss';

const PlusMinus = ({plusOrMinus}) => {
  return (
    <div className='plus_mines'>
      <button> <p> {plusOrMinus} </p> </button>
    </div>
  )
}

export default PlusMinus;