import React, { useState } from "react";
import {Link} from "react-router-dom";

export const MovieItem = ({urlImg, name, description, country, genre}) => {
    const movieItemImgStyle = {
        backgroundImage: `url(${urlImg})`,
        padding: '16px'
    };
    const [showDescription, setShowDescription] = useState(false);
    const desc = showDescription ? <p className="rub16">{description}</p> : null
    const movieLinkStyle = {
        color: '#333333',
        textDecoration: 'none'
    };
    const linkTo = {
        pathname:`/movie-page/${name}`,
        state: {urlImg, name, description, country, genre}
    };

    return (
        <Link style={movieLinkStyle} to={linkTo}>
            <div onMouseEnter={() => setShowDescription(true)}
                 onMouseLeave={() => setShowDescription(false)}
                 className="movie-item"
            >
                <div className="movie-item_wrap">
                    <div style={movieItemImgStyle} className="movie-item_img">
                        {desc}
                    </div>
                </div>
                <div className="movie-item_name rub20 mt-2">{name}</div>
            </div>
        </Link>
    );
}
