export default (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [{id: action.payload.id, userId: 10, nickname: 'Ivan', userComment: true, text: action.payload.text}, ...state]
        case 'REMOVE_COMMENT':
            return state.filter(item => item.id !== action.payload.id);
        case 'EDIT_NAME': {
            const findUser = state.find(item => item.id === action.payload.id);
            findUser['nickname'] = action.payload.newName;
            return [...state];
        }
        default:
            return state;
    }
}
