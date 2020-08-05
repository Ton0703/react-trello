import React from "react";
import {useSelector} from 'react-redux'
import "./index.scss";

function Button({ title, handleSave, handleDelete }) {
    const {bg} = useSelector(state => state.theme)
  return (
    <>
      <div className="editButton" onClick={handleSave} style={{background: bg}}>
        {title}
      </div>
      {handleDelete && (
        <div className="deleteButton" onClick={handleDelete}>
          删除
        </div>
      )}
    </>
  );
}

export default Button;
