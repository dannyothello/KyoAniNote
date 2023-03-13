import React from 'react';
import { Link } from 'react-router-dom';

const AnimeLib = (props) => {
    return (
        <>
            {props.animes.map((anime, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <Link to={`/add-anime/${anime.title}/${anime.type}`}><img src={anime.visual} alt='anime' width="350" height="400"></img></Link>
                </div>
            ))}
        </>
    );
};

export default AnimeLib;