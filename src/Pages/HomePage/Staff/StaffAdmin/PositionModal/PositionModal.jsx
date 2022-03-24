import React,{useState} from 'react'

export const PositionModal = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
      setOpen(!open);
    };
  return (
    <div className="add_usertype">
    {open === false ? (
      <div className="add_flex">
        <h3 className="add_flex__usertype">Должность</h3>
        <div onClick={toggle} className="add_vector__img"></div>
      </div>
    ) : (
      <div>
        <div className="add_flex">
          <h3 className="add_flex__usertype">Должность</h3>
          <div onClick={toggle} className="add_vector__img2"></div>
        </div>
        <div className="add_flex1">
          <p>Админ</p>
          <input
            type="radio"
            name="radio"
            value="admin"
            // onChange={(e) => onChange("usertype", e.target.value)}
          />
        </div>
        <div className="add_flex1">
          <p>Курьер</p>
          <input
            type="radio"
            name="radio"
            value="runner"
            // onChange={(e) => onChange("usertype", e.target.value)}
          />
        </div>
        <div className="add_flex1">
          <p>Флорист</p>
          <input
            type="radio"
            name="radio"
            value="florist"
            // onChange={(e) => onChange("usertype", e.target.value)}
          />
        </div>
      </div>
    )}
  </div>
  )
}
