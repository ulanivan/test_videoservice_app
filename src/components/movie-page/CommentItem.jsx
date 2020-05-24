import React, {useState, useContext, useEffect} from "react";
import {Context} from "../../context";

export const CommentItem = ({id, userComment, nickname, text}) => {
    const deleteIconStyle = {
        position: "absolute",
        right: '-28px',
        top: '0',
        width: '15px',
        height: '15px',
        cursor: 'pointer'
    };

    const { dispatch } = useContext(Context);
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
                               type: 'editName',
                               payload: {id, newName: e.target.value}
                           })
                       }}
                />
            </div>
            <div className="comment-item_comment">
                <p>{text}</p>
            </div>
            {userComment && <img style={deleteIconStyle}
                                src="/icons/delete-icon.jpg" alt="Удалить комментарий"
                                onClick={() => dispatch({
                                    type: 'remove',
                                    payload: {id}
                                })}
            />}
        </div>
    );
};
