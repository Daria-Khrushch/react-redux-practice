import { COMMENT } from "./actions"

const initialState = {
    comments: []
}

export const commentReducer = (state = initialState, action) => {
     switch (action.type) {
        case COMMENT: 
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        default:
            return state;
    }
 
}