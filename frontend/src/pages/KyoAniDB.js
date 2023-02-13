import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AnimeLib from '../components/AnimeLib';

function KyoAniDB() {
    const [animes, setAnimes] = useState([
        {
            "Title": "Hyouka",
            "Length": 22,
            "Type": "TV Show",
            "Poster": "https://www.kyotoanimation.co.jp/img/kotenbu/bgIndex.jpg"
        },
        {
            "Title": "Nichijou",
            "Length": 26,
            "Type": "TV Show",
            "Poster": "https://www.kyotoanimation.co.jp/img/works/key_visual/nichijou.jpg"
        }
        ,
        {
            "Title": "Violet Evergarden",
            "Length": 13,
            "Type": "TV Show",
            "Poster": "https://www.kyotoanimation.co.jp/img/works/key_visual/violet.jpg"
        }
    ]);

    return (
        <div className='container-fluid movie-app'>
            <div class="boxed">
                    Click on a visual to add a new Kyoto Animation show you've watched to your tracker!
            </div>
            <div className='row'>
                <AnimeLib animes={animes} />
            </div>
        </div>
    );
}

export default KyoAniDB;