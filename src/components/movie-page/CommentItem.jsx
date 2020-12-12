import React, { useContext } from "react";
import { Context } from "../../context";

export const CommentItem = ({id, userComment, nickname, text}) => {
    const { dispatch } = useContext(Context);

    const deleteIconStyle = {
        position: "absolute",
        right: '-28px',
        top: '0',
        width: '15px',
        height: '15px',
        cursor: 'pointer'
    };

    const removeComment = (commentId) => {
        dispatch({ type: 'REMOVE_COMMENT', payload: { id: commentId } });
    };

    return (
        <div className="comment-item mb-3">
            <div className="comment-item_nickname rub16-bold">
                <input type="text"
                       id={id}
                       value={nickname}
                       name={id}
                       className="comment-item_nickname_input"
                       onChange={(e) => {
                           dispatch({
                               type: 'EDIT_NAME',
                               payload: {id, newName: e.target.value}
                           })
                       }}
                />
            </div>
            <div className="comment-item_comment">
                <p>{text}</p>
            </div>
            {userComment && <img style={deleteIconStyle}
                                src="/icons/delete-icon.jpg"
                                alt="Удалить комментарий"
                                onClick={() => removeComment(id)}
            />}
        </div>
    );
};
