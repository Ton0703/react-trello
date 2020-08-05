import * as TYPRS from '../types'
import uuid from 'react-uuid'

export const addCard = (id, text) => {
    return {
        type: TYPRS.ADD_CARD,
        payload: {
            listId: id,
            text,
            cardId: uuid()
        }
    }
}

export const deleteCard = (listId, cardId) => {
    return {
        type: TYPRS.DELETE_CARD,
        payload: {
            listId,
            cardId
        }
    }
}

export const updateCard = (cardId, text) => {
    return {
        type: TYPRS.UPDATE_CARD,
        payload: {
            cardId,
            text
        }
    }
}