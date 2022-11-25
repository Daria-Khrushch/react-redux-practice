export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const INPUT_TEXT = 'INPUT_TEXT';
export const COMMENT = "COMMENT"

export const likesActionCreator = () => {
    return {
        type: LIKE
    }
}

export const dislikesActionCreator = () => {
    return {
        type: DISLIKE
    }
}

export const inputActionCreator = (text) => {
    return {
        type: INPUT_TEXT,
        text
    }
}

export const commentActionCreator = (text, id) => {
    return {
        type: COMMENT,
        data: {text, id}
    }
}