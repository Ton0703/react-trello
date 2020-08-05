import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ListEditor from "../ListEditor";
import { addList } from "../../redux/list/action";
import "./index.scss";

function AddList({toggleAddingList}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const AddList = () => {
    dispatch(addList(title));
  };
  const handleChangeTitle = e => {
      setTitle(e.target.value)
  }
  return (
    <div>
      <ListEditor
        title={title}
        handleChangeTitle={handleChangeTitle}
        addList={AddList}
        setEditingTitle={toggleAddingList}
      />
    </div>
  );
}

export default AddList;
