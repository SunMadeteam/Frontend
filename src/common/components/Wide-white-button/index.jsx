import './index.scss';

const WideWhiteButton = ({word , disabled , verify ,text}) => {
  // const state = true;
    
    return (
      <>
        {
          word === 'Продолжить' ? (
            <div className={disabled ?'wideWhiteButton wideWhiteButton_disabled':'wideWhiteButton'}>
              <button  disabled={disabled} onClick={verify}> {text} </button>
            </div>
          ) : (
            <div className={disabled ?'wideWhiteButton wideWhiteButton_disabled':'wideWhiteButton'}>
              <button  disabled={disabled} onClick={verify}> {text} </button>
            </div>
          )
        }
      </>
    
    )
}

export default WideWhiteButton;