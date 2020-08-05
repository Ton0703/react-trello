import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "../EditButton";
import Close from "../../images/close";
import "./index.scss";

function Editor(props) {
  const { onSave, onCancel, onDelete, setAddingCard, title } = props;
  const [text, setText] = useState(props.text || "");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const onEnter = (e) => {
    if (e.keyCode === 12) {
      e.preventDefault();
      onSave(text);
      setAddingCard(false);
    }
  };
  const handleBlur = () => {
    if (text === "") {
      setAddingCard(false);
    } else {
      onSave(text);
      setAddingCard(false);
    }
  };
  const handleSave = () => {
    if (text === "") {
      return;
    } else {
      onSave(text);
      setAddingCard(false);
    }
  };
  return (
    <div className="Edit-Card">
      <div className="Card">
        <TextareaAutosize
          autoFocus
          className="Edit-Card-Textarea"
          placeholder="为这张卡片输入标题..."
          value={text}
          onChange={handleChangeText}
          onKeyDown={onEnter}
          onBlur={handleBlur}
        />
      </div>
      <div className="edit-btn">
        <EditButtons
          handleSave={handleSave}
          title={title}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
        <div style={{width: '32px', height: '32px'}} onClick={() => setAddingCard(false)}>
           <Close />
        </div>
      </div>
    </div>
  );
}

export default Editor;
