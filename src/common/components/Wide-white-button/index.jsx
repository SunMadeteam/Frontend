import './index.scss';

const WideWhiteButton = ({word , disabled}) => {
  // const state = true;

    return (
      <>
        <div className={disabled ?'wideWhiteButton wideWhiteButton_disabled':'wideWhiteButton'}>
          <button  disabled={disabled}> {word} </button>
        </div>
      </>
    
    )
}

export default WideWhiteButton;