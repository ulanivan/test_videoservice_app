import React, { useState, useEffect, useReducer } from "react";
import { Context } from "../../context";
import { CommentItem } from "./CommentItem";
import { AddCommentForm } from "./AddCommentForm";
import reducer from "../../reducer";
import _ from 'lodash';

export const CommentsList = () => {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('commentsList')) || []);
    const [commentValue, setCommentValue] = useState('');

    useEffect(() => {
        localStorage.setItem('commentsList', JSON.stringify(state));
    }, [state]);

    useEffect(() => {
        setCommentValue('');
    }, [state])
    const unicId = _.uniqueId();

    const commentList = state.map((item) => <CommentItem key={item.id} {...item}/>);

    return (
        <Context.Provider value={{
            dispatch
        }}>
            <div>
                <div className="pb-3">
                    <div style={{position: 'relative'}}>
                        <AddCommentForm  setCommentValue={setCommentValue}
                                         commentValue={commentValue}
                                         id={unicId}
                                         movieId={unicId}
                                         placeholder="Введите комментарий..."
                        />
                    </div>
                </div>
                { commentList }
            </div>
        </Context.Provider>
    );
};
