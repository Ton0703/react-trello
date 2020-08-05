import * as TYPES from '../types'

export const themeChange = (color) => {
    return {
        type: TYPES.CHANGE_THEME,
        payload: color
    }
}