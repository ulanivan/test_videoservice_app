import React, {useContext} from "react";
import {Context} from "../context";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {GenreItem} from '../components/GenreItem';
import {TvChannelItem} from "../components/TvChannelItem";
import Swiper from 'react-id-swiper';
import {MovieItem} from "../components/MovieItem";

export const HomePage = () => {
    const {movies, genreItems, channelItems} = useContext(Context);
    const tabs = {
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '28px'
    };
    const sliderContent = movies.map((item) => <div key={item.id}><MovieItem {...item} /></div>);
    const sliderSettings = {
        slidesPerView: 4,
        freeMode: true,
        pagination: false,
        slideClass: 'movie-slide'
    }

    return (
        <div className="content d-flex flex-column">
            <div className="content-container container">
                <Tabs style={tabs} defaultActiveKey="movies" id="uncontrolled-tab-example">
                    <Tab eventKey="movies" title="Фильмы">
                        <div className="d-flex justify-content-start mt-3">
                            <h2 className="rub24">Новинки</h2>
                        </div>
                        <Swiper {...sliderSettings}>
                            {sliderContent}
                        </Swiper>
                        <p className="mt-5 rub24">Жанры</p>
                        <div className="d-flex justify-content-between flex-wrap">
                            {genreItems.map((item) => {
                                return (
                                    <GenreItem key={item.id} {...item} />
                                );
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="tv_channels" title="Телеканалы">
                        <div className="mt-5 tv-items-list" id="tv-items-list">
                            {channelItems.map(item => {
                                return (
                                    <div key={item.id} className="mb-3">
                                        <TvChannelItem img={<img src={item.img} alt={''} />} name={item.name} listTvProgramms={item.listProgramms}/>
                                    </div>
                                );
                            })}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};
