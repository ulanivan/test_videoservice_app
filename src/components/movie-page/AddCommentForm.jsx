import React, { useContext } from "react";
import { Context } from "../../context";

export const AddCommentForm = ({placeholder, setCommentValue, commentValue, id}) => {
    const { dispatch } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_COMMENT',
            payload: {id, text: commentValue}
        });
    };

    return (
      <form className="add-comment-form" onSubmit={handleSubmit}>
          <textarea value={commentValue}
                 onChange={(e) => setCommentValue(e.target.value)}
                 placeholder={placeholder}
                 className="add-comment-input"
          />
          <button type="submit" className="default-btn submit-comment-btn">
              Опубликовать
          </button>
      </form>
    );
};
