import './index.scss';

const WideTransparentButton = ({number}) => {
  const state = true;
  
    return (
      <>
        <div className="wideWhiteButton wideTransparentButton">
          <button className={!state ? 'default-btn' : ''}> {number} </button>
        </div>
      </>
    
    )
}

export default WideTransparentButton;