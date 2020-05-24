import React from "react";

export const GenreItem = ({imgPath, name, gradient}) => {
    const genreItemStyle = {
        borderRadius: '6px',
        position: 'relative',
        cursor: 'pointer',
        background: `linear-gradient(136.27deg, ${gradient.from} 8.44%, ${gradient.to} 91.36%)`,
    };
    const genreItemNameStyle = {
        position: 'absolute',
        bottom: '24px'
    };
    return (
        <div className="genre-item d-flex justify-content-center align-items-center" style={genreItemStyle}>
            <img src={imgPath} alt="" />
            <span style={genreItemNameStyle}>{name}</span>
        </div>
    );
};
