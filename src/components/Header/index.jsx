import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {themeChange} from '../../redux/theme/acion'
import "./index.scss";

const lists = [
    'rgb(75, 191, 107)',
    '#519839',
    '#B04632',
    '#D29034',
    '#0079BF',
]

function Header() {
    const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const { bg } = useSelector((state) => state.theme);

  const handleClick = () => {
    setVisible(!visible);
  };
  const handleColorClick = (color) => {
        dispatch(themeChange(color))
  }
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="theme" style={{ background: bg }} onClick={handleClick}>
        {visible && <div className="color-lists">
               {lists.map((item, index) => (
                   <div className='color-item' key={index} style={{background: item}} onClick={() => handleColorClick(item)} >

                   </div>
               ))}
            </div>}
      </div>
    </div>
  );
}

export default Header;
