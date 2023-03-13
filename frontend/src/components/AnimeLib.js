import React from 'react';
import { Link } from 'react-router-dom';

const AnimeLib = (props) => {
    return (
        <>
            {props.animes.map((anime, index) => (
                <div className='column'>
                    <Link to={`/add-anime/${anime.title}/${anime.type}`}><img src={anime.visual} alt='anime' width="350" height="400"></img></Link>
                    <p>{anime.title}</p>
                </div>
            ))}
        </>
    );
};

export default AnimeLib;