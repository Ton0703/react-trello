import * as TYPES from '../types'

const initialState = {
    bg: 'rgb(75, 191, 107)'
}

export default function ThemeReducer(state = initialState, action){
    switch(action.type){
        case TYPES.CHANGE_THEME:
            return {
                bg: action.payload
            }
        default:
            return state
    }
}