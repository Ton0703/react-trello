import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import ListEditor from "../ListEditor";
import Card from "../Card";
import CardEditor from "../CardEditor";
import Delete from "../../images/delete";
import Add from "../../images/add";

import { updateList, deleteList } from "../../redux/list/action";
import { addCard } from "../../redux/card/action";

function List({ listId, index }) {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list[listId]);
  const [editingTitle, setEditingTitle] = useState(false);
  const [addingCard, setAddingCard] = useState(false);
  const [title, setTitle] = useState(list.title);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const editListTitle = () => {
    dispatch(updateList(listId, title));
  };
  const toggleAddingCard = () => {
    setAddingCard(!addingCard);
  };
  const AddCard = (text) => {
    dispatch(addCard(listId, text));
  };
  const handleDelete = () => {
    dispatch(deleteList(listId));
  };
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="List"
        >
          {editingTitle ? (
            <ListEditor
              list={list}
              title={title}
              handleChangeTitle={handleChangeTitle}
              saveList={editListTitle}
              onClickOutside={editListTitle}
              setEditingTitle={setEditingTitle}
            />
          ) : (
            <div
              className="List-Title"
              onClick={() => setEditingTitle(!editingTitle)}
            >
              {list.title}
              <div className="delete" onClick={handleDelete}>
                <Delete />
              </div>
            </div>
          )}

          <Droppable droppableId={list.id}>
            {(provided, _snapshot) => (
              <div ref={provided.innerRef}>
                {list.cards &&
                  list.cards.map((cardId, index) => (
                    <Card
                      key={cardId}
                      cardId={cardId}
                      index={index}
                      listId={list.id}
                    />
                  ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {addingCard ? (
            <CardEditor
              setAddingCard={setAddingCard}
              onSave={AddCard}
              onCancel={toggleAddingCard}
              title="添加卡片"
            />
          ) : (
            <div className="Toggle-Add-Card" onClick={setAddingCard}>
              <div style={{marginRight:'5px'}}>
                <Add />
              </div>{" "}
              添加另一张卡片
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}

export default List;
