import './index.scss';

const WideWhiteButton = ({word,disabled}) => {
  const state = true;
  
    return (
      <>
        {/* <div className="wideWhiteButton"> */}
          <button className={(!state) ? 'default-btn' : ''} disabled={disabled}> {word} </button>
        {/* </div> */}
      </>
    
    )
}

export default WideWhiteButton;