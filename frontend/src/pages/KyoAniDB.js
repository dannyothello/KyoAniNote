import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AnimeLib from '../components/AnimeLib';

function KyoAniDB() {

    const [animes, setAnimes] = useState([
        { title: "Hyouka", visual: "https://www.kyotoanimation.co.jp/img/kotenbu/bgIndex.jpg", type: "TV Show" },
        { title: "Tamako Market", visual: "https://cdn.myanimelist.net/images/anime/1669/122434l.jpg", type: "TV Show"},
        { title: "Violet Evergarden", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/violet.jpg", type: "TV Show" },
        { title: "Liz and the Blue Bird", visual: "https://cdn.myanimelist.net/images/anime/1638/93032l.jpg", type: "Movie" },
        { title: "Nichijou", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/nichijou.jpg", type: "TV Show" },
        { title: "Tsurune", visual: "https://cdn.myanimelist.net/images/anime/1360/93571l.jpg", type: "TV Show" }
    ]);

    const genRandom = () => {
        fetch('https://random-anime-microservice.onrender.com/pick', {
            method: 'PUT',
            body: JSON.stringify([
                { title: "Hyouka", visual: "https://www.kyotoanimation.co.jp/img/kotenbu/bgIndex.jpg", type: "TV Show" },
                { title: "Tamako Market", visual: "https://cdn.myanimelist.net/images/anime/1669/122434l.jpg", type: "TV Show" },
                { title: "Violet Evergarden", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/violet.jpg", type: "TV Show" },
                { title: "Liz and the Blue Bird", visual: "https://cdn.myanimelist.net/images/anime/1638/93032l.jpg", type: "Movie" },
                { title: "Nichijou", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/nichijou.jpg", type: "TV Show" },
                { title: "Clannad", visual: "https://cdn.myanimelist.net/images/anime/1804/95033l.jpg", type: "TV Show" },
                { title: "Tsurune", visual: "https://cdn.myanimelist.net/images/anime/1360/93571l.jpg", type: "TV Show" },
                { title: "A Silent Voice", visual: "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg", type: "Movie" },
                { title: "K-On!", visual: "https://cdn.myanimelist.net/images/anime/10/76120l.jpg", type: "TV Show"},
                { title: "Tamako Love Story", visual: "https://cdn.myanimelist.net/images/anime/1417/91333l.jpg", type: "Movie" }
            ]),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(text => {
            console.log(text)
            setAnimes(text)
        })
    }

    return (
        <>
            <button className="randomize"
                type="button"
                onClick={genRandom}>
                Randomize Anime
            </button>

            <div className='container-fluid movie-app'>
                <div class="boxed">
                    Click on a visual to add a new Kyoto Animation show or movie you've watched to your tracker!
                </div>
                <div className='row'>
                    <AnimeLib animes={animes} />
                </div>
            </div>
        </>
    );
}

export default KyoAniDB;