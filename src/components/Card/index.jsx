import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, updateCard } from "../../redux/card/action";
import CardEditor from "../CardEditor";
import Edit from "../../images/edit";
import "./index.scss";

function Card({ cardId, index, listId }) {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card[cardId]);
  const [editing, setEditing] = useState(false);
  const [hover, setHover] = useState(false);
  const startHover = () => {
    setHover(true);
  };
  const endHover = () => {
    setHover(false);
  };
  const startEditing = () => {
    setEditing(true);
  };
  const endEditing = () => {
    setEditing(false);
    setHover(false);
  };
  const DeleteCard = () => {
    dispatch(deleteCard(listId, cardId));
  };
  const editCard = (text) => {
    dispatch(updateCard(cardId, text));
  };
  return !editing ? (
    <Draggable draggableId={card.cardId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="Card"
          onMouseEnter={startHover}
          onMouseLeave={endHover}
        >
          {hover && (
            <div className="Card-Icons">
              <div className="Card-Icon" onClick={startEditing}>
                <Edit />
              </div>
            </div>
          )}

          {card.text}
        </div>
      )}
    </Draggable>
  ) : (
    <CardEditor
      title="提交修改"
      text={card.text}
      onSave={editCard}
      onDelete={DeleteCard}
      onCancel={endEditing}
      setAddingCard={setEditing}
    />
  );
}

export default Card;
