const initialState = {
    darkMode: false
}

export default function GlobalReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DARK_MODE':
            return {
                ...state,
                darkMode: action.payload
            }

        default:
            return state;
    }
}