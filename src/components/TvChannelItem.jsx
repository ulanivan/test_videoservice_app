import React from "react";

export const TvChannelItem = ({img, name, listTvProgramms}) => {
    return (
        <div className="tv-channel-item">
            <div className="tv-channel-item_img d-flex justify-content-center align-items-center">
                {img}
            </div>
            <div className="tv-channel-item_info">
                <span>{name}</span>
                {listTvProgramms.map((programm) => {
                    return (
                        <div key={programm.id} className="tv-programm mt-2 rub16 d-flex">
                            <div className="tv-programm_time">
                                {programm.time}
                            </div>
                            <div className="tv-programm_name ml-3">
                                {programm.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
