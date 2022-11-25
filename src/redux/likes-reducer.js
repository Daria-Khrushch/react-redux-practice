import { LIKE, DISLIKE } from "./actions"

const initialState = {
    likes: 0
}

export const likesReducer = (state = initialState, action) => {
     switch (action.type) {
        case LIKE: 
            return {
                ...state,
                likes: state.likes + 1
            }
        case DISLIKE:
            return {
                ...state,
                likes: state.likes - 1
            }
        default:
            return state;
    }
}