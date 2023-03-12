import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AnimeLib from '../components/AnimeLib';

function KyoAniDB() {

    const [animes, setAnimes] = useState([
        { title: "Hyouka", visual: "https://www.kyotoanimation.co.jp/img/kotenbu/bgIndex.jpg" },
        { title: "Tamako Market", visual: "https://cdn.myanimelist.net/images/anime/1669/122434l.jpg" },
        { title: "Violet Evergarden", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/violet.jpg" },
        { title: "Liz and the Blue Bird", visual: "https://cdn.myanimelist.net/images/anime/1638/93032l.jpg" },
        { title: "Nichijou", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/nichijou.jpg" }
    ]);

    const genRandom = () => {
        fetch('http://localhost:3001/pick', {
            method: 'PUT',
            body: JSON.stringify([
                { title: "Hyouka", visual: "https://www.kyotoanimation.co.jp/img/kotenbu/bgIndex.jpg" },
                { title: "Tamako Market", visual: "https://cdn.myanimelist.net/images/anime/1669/122434l.jpg" },
                { title: "Violet Evergarden", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/violet.jpg" },
                { title: "Liz and the Blue Bird", visual: "https://cdn.myanimelist.net/images/anime/1638/93032l.jpg" },
                { title: "Nichijou", visual: "https://www.kyotoanimation.co.jp/img/works/key_visual/nichijou.jpg" },
                { title: "Clannad", visual: "https://cdn.myanimelist.net/images/anime/1804/95033l.jpg" },
                { title: "Tsurune", visual: "https://cdn.myanimelist.net/images/anime/1360/93571l.jpg" },
                { title: "A Silent Voice", visual: "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg" },
                { title: "K-On!", visual: "https://cdn.myanimelist.net/images/anime/10/76120l.jpg" },
                { title: "Tamako Love Story", visual: "https://cdn.myanimelist.net/images/anime/1417/91333l.jpg" }
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
            <button
                type="button"
                onClick={genRandom}>
                Randomize Anime
            </button>

            <div className='container-fluid movie-app'>
                <div class="boxed">
                    Click on a visual to add a new Kyoto Animation show you've watched to your tracker!
                </div>
                <div className='row'>
                    <AnimeLib animes={animes} />
                </div>
            </div>
        </>
    );
}

export default KyoAniDB;