import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../EditButton";
import "./index.scss";


function Editor(props) {
  const {
    title,
    handleChangeTitle,
    saveList,
    setEditingTitle,
    addList,
  } = props;
  const handlePress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (title.trim() !== "") {
        saveList && saveList();
        addList && addList();
        setEditingTitle(false);
      }
    }
  };
  const handleBlur = () => {
    if (title.trim() !== "") {
      saveList && saveList();
      addList && addList();
    }
    setEditingTitle(false);
  };
  return (
    <div className={`${addList ? 'wrap' : ''}`}>
      <TextareaAutosize
        autoFocus
        className="List-Title-Textarea"
        value={title}
        onChange={handleChangeTitle}
        onKeyDown={handlePress}
        onBlur={handleBlur}
      />
      {addList && (
        <div>
          <Button title="添加列表" handleSave={() => addList(title)} />
        </div>
      )}
    </div>
  );
}

export default Editor;
