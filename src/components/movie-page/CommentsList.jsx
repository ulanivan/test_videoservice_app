import React, { useState, useEffect, useReducer } from "react";
import {Context} from "../../context";
import {CommentItem} from "./CommentItem";
import {AddCommentInput} from "./AddCommentInput";
import reducer from "../../reducer";
import _ from 'lodash';

export const CommentsList = () => {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('commentsList')) || [])
    const [commentValue, setCommentValue] = useState('');

    useEffect(() => {
        localStorage.setItem('commentsList', JSON.stringify(state));
    }, [state]);
    useEffect(() => {
        setCommentValue('');
    }, [state])
    const unicId = _.uniqueId();

    const commentListDom = state.map((item) => <CommentItem key={item.id} {...item}/>);

    return (
        <Context.Provider value={{
            dispatch
        }}>
            <div>
                <div className="pb-3">
                    <div style={{position: 'relative'}}>
                        <AddCommentInput setCommentValue={setCommentValue}
                                         commentValue={commentValue}
                                         id={unicId}
                                         placeholder="Введите комментарий..."
                        />
                        <button className="default-btn submit-comment-btn"
                                onClick={() => dispatch({
                                    type: 'add',
                                    payload: {id: unicId, text: commentValue}
                                })}
                        >
                            Опубликовать
                        </button>
                    </div>
                </div>
                {commentListDom}
            </div>
        </Context.Provider>
    );
};
