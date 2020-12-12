import React from "react";
import { Link } from "react-router-dom";
import { CommentsList } from "../components/movie-page/CommentsList";

export const MoviePage = (props) => {
    const { urlImg, name, description, country, genre } = props.location.state;
    return (
      <div className="container">
        <div className="movie-description mb-5 row justify-content-center">
          <div className="movie-description_img col-lg-5 col-12 d-flex">
              <Link to="/">
                  <svg className="mt-3" width="10" height="20" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22L2 12L12 2" stroke="#E5261E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </Link>

              <img className="ml-5" src={urlImg} alt=""/>
          </div>
          <div className="movie-description mt-5 mt-lg-0 col-lg-7 col-12">
            <div className="movie-description_info d-flex">
                <div>
                    <div className="rub16">Название:</div>
                    { country && <div className="rub16 mt-2">Страна:</div> }
                    { genre && <div className="rub16 mt-2">Жанр:</div> }
                </div>
                <div className="ml-5">
                    <div className="rub20-bold">{ name }</div>
                    <div className="rub20 mt-2">{ country }</div>
                    <div className="rub20 mt-2">{ genre }</div>
                </div>
            </div>
            <div className="movie-description_description mt-4">
                { description }
            </div>
          </div>
        </div>
        <div className="comments-block">
          <h3 className="rub20-bold d-flex justify-content-center">Комментарии</h3>
          <div className="row justify-content-center flex-column align-items-center">
            <div className="comment-list col-xl-9 col-lg-8 col-12">
              <CommentsList {...props}/>
            </div>
          </div>
        </div>
      </div>
    );
};
