import React, {useContext} from "react";
import {Context} from "../../context";

export const AddCommentInput = ({placeholder, setCommentValue, commentValue, id}) => {
    const {dispatch} = useContext(Context);
    const addComment = (e) => {
        if (e.key === 'Enter' && e.target.value.trim().length > 0) {
            dispatch({
                type: 'add',
                payload: {id, text: commentValue}
            });
        }
    };
    return (
      <div>
          <textarea value={commentValue}
                 onChange={(e) => setCommentValue(e.target.value)}
                 onKeyDown={addComment}
                 placeholder={placeholder}
                 className="add-comment-input"
          />
      </div>
    );
};
