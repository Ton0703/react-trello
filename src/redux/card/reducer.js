import * as TYPES from "../types";
const initialState = {
    'card-00':{
        text: '例如，看电影',
        listId: '00',
        cardId:'card-00'
    }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_CARD: {
      const { text, listId, cardId } = action.payload;
      return { ...state, [cardId]: { text, listId, cardId } };
    }
    case TYPES.DELETE_CARD: {
      const { cardId } = action.payload;
      const { [cardId]: deleteCard, ...rest } = state;
      return { ...rest };
    }
    case TYPES.UPDATE_CARD:
        const {cardId, text} = action.payload
        return {
            ...state, [cardId]: {...state[cardId], text}
        }
    default:
      return state;
  }
}
