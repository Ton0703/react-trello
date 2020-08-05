import * as TYPES from "../types";
const initialState = {
  lists: ["00", "01", "02"],
};

export default function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_LIST: {
      const { id } = action.payload;
      return { lists: [...state.lists, id] };
    }
    case TYPES.MOVE_LIST: {
      const { oldListIndex, newListIndex } = action.payload;
      const newLists = Array.from(state.lists);
      const [removedList] = newLists.splice(oldListIndex, 1);
      newLists.splice(newListIndex, 0, removedList);
      return { lists: newLists };
    }
    case TYPES.DELETE_LIST: {
      const id = action.payload;
      const newList = state.lists.filter((item) => item !== id);
      return { lists: newList };
    }
    default:
      return state;
  }
}
