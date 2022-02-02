import './index.scss';

const WideButton = ({word}) => {
  const state = true;
  
    return (
      <>
        <div className="wideButton">
          <button className={!state ? 'default-btn' : ''}> {word} </button>
        </div>
      </>
    
    )
}

export default WideButton;