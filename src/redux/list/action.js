import * as TYPES from '../types'
import uuid from 'react-uuid'

export const updateList = (id, title) => {
    return {
        type: TYPES.UPDATE_LIST,
        payload: {
            id,
            title
        }
    }
}

export const deleteList = (id) => {
    return {
        type: TYPES.DELETE_LIST,
        payload: id
    }
}

export const addList = (title) => {
    return {
        type: TYPES.ADD_LIST,
        payload: {
            title,
            id: uuid()
        }
    }
}