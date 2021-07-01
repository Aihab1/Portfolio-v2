export const initialState = {
    lightMode: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                lightMode: !state.lightMode
            }

        case 'LIGHT_THEME':
            return {
                ...state,
                lightMode: true
            }

        case 'DARK_THEME':
            return {
                ...state,
                lightMode: false
            }

        default:
            return state
    }
}

export default reducer