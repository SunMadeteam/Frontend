import './index.scss';

const WideWhiteButton = ({word}) => {
  const state = true;
  
    return (
      <>
        <div className="wideWhiteButton">
          <button className={!state ? 'default-btn' : ''}> {word} </button>
        </div>
      </>
    
    )
}

export default WideWhiteButton;