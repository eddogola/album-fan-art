import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { createApi } from 'unsplash-js';
import SearchBar from '../SearchBar/SearchBar';
import ImageGrid from '../ImageGrid/ImageGrid';
import './Sidebar.css';

const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    }
)

export default function Sidebar({ onClickImage }) {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState("new");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [total, setTotal] = useState("");
    const perPage = 40;

    const getMorePhotos = async (page) => {
        try {
            await unsplash.search
                .getPhotos({
                    query: query,
                    page: page,
                    per_page: perPage,
                })
                .then(result => {
                    setTotal(result.response.total);
                    setPage(page);
                    photos.length ? setPhotos([...photos, ...result.response.results]) : setPhotos(result.response.results)
                });
        } catch(err) {
            console.log("Unable to retrieve photos: ", err)
        }
    }

    useEffect(() => {
        setPage(1);
        getMorePhotos(1);
    }, [query])

    return (
        <div className="sidebar">
            <SearchBar setQuery={ setQuery } setPhotos={ setPhotos } setIsLoading={ setIsLoading } />
            <InfiniteScroll
                dataLength={ photos.length }
                next={ () => getMorePhotos(page + 1) }
                hasMore={ isLoading }
            >
                <ImageGrid photos={ photos } onClickImage={ onClickImage } />
                { photos.length === total && total!== 0 ? 
                (
                    <p>You've seen it all</p>
                ) : "" }
            </InfiniteScroll>
            <button className="topButton" onClick={() => {

            }}>^</button>
        </div>
    )
}