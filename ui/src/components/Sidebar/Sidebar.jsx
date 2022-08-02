import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { createApi } from 'unsplash-js';
import SearchBar from '../SearchBar/SearchBar';
import ImageGrid from '../ImageGrid/ImageGrid';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css';

const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    }
)

export default function Sidebar({ onClickImage }) {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState("album");
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
                    orientation: 'landscape',
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

    const gallery = <div className="gallery">
        <ImageGrid photos={ photos } onClickImage={ onClickImage } />
        { ( photos.length === total && total!== 0 ? (<b className='text-light text-center'>You've seen it all!</b>) : "" ) }
    </div>

    const formRef = useRef();

    return (
        <div className="sidebar" id='sidebar'>
            <SearchBar setQuery={ setQuery } setPhotos={ setPhotos } setIsLoading={ setIsLoading } formRef={ formRef } />
            <InfiniteScroll
                dataLength={ photos.length }
                next={ () => getMorePhotos(page + 1) }
                hasMore={ isLoading }
                scrollableTarget="sidebar"
            >
             { photos.length > 0 ? gallery : <p className='text-light text-center'>Sorry, there are no results for <strong>{ query }</strong>, try again!</p> }   
            </InfiniteScroll>
            <button className="topButton" onClick={() => {
                formRef.current.scrollIntoView({behaviour: 'smooth'});
            }}>
                <i className="bi bi-arrow-up"></i>
            </button>
        </div>
    )
}