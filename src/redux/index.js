import { combineReducers } from "redux";
import list from "./list/reducer";
import card from "./card/reducer";
import board from './board/reducer';
import theme from './theme/reducer'

export default combineReducers({ list, card, board, theme });
