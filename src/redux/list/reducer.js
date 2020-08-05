import * as TYPES from "../types";

const intialState = {
  "00": {
    id: "00",
    title: "要做的事",
    cards: ['card-00'],
  },
  "01": {
    id: "01",
    title: "进行中",
    cards: [],
  },
  "02": {
    id: "02",
    title: "完成",
    cards: [],
  },
};

export default function BoardReducer(state = intialState, action) {
  switch (action.type) {
    case TYPES.UPDATE_LIST: {
      const { id, title } = action.payload;
      return { ...state, [id]: { ...state[id], title } };
    }
    case TYPES.DELETE_LIST:{
      const id = action.payload
      const {[id]: deleteList, ...rest} = state
      return {
        ...rest
      }
    }
    case TYPES.ADD_LIST: {
      const {title, id} = action.payload
      return {
        ...state, [id]: {id, title, cards: []}
      }
    }
    case TYPES.ADD_CARD:{
      const { listId, cardId } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], cards: [...state[listId].cards, cardId] }
      };
    }
    case TYPES.DELETE_CARD:{
      const {listId, cardId} = action.payload
      return {
        ...state, [listId]:{...state[listId], cards: state[listId].cards.filter(item => item !== cardId)}
      }
    }
    case "MOVE_CARD": {
      const {
        oldCardIndex,
        newCardIndex,
        sourceListId,
        destListId
      } = action.payload;
      // 在同一个list照片那个移动
      if (sourceListId === destListId) {
        const newCards = Array.from(state[sourceListId].cards);
        const [removedCard] = newCards.splice(oldCardIndex, 1);
        newCards.splice(newCardIndex, 0, removedCard);
        return {
          ...state,
          [sourceListId]: { ...state[sourceListId], cards: newCards }
        };
      }
      // 在不同的list中移动
      const sourceCards = Array.from(state[sourceListId].cards);
      const [removedCard] = sourceCards.splice(oldCardIndex, 1);
      const destinationCards = Array.from(state[destListId].cards);
      destinationCards.splice(newCardIndex, 0, removedCard);
      return {
        ...state,
        [sourceListId]: { ...state[sourceListId], cards: sourceCards },
        [destListId]: { ...state[destListId], cards: destinationCards }
      };
    }
    default:
      return state;
  }
}
