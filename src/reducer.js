export default (state, action) => {
    const dispatch = {
        add: () => [{id: action.payload.id, userId: 10, nickname: 'Ivan', userComment: true, text: action.payload.text, movieId: action.payload.movieId}, ...state],
        remove: () => state.filter(item => item.id !== action.payload.id),
        editName: () => {
            const findUser = state.find(item => item.id === action.payload.id);
            findUser['nickname'] = action.payload.newName;
            return [...state];
        }
    };
    return dispatch[action.type]() || state;
}
