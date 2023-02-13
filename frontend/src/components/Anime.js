import React from 'react';

function Anime({ anime }) {
    return (
        <tr>
            <td>{anime.title}</td>
            <td>{anime.score}</td>
            <td>{anime.progress}</td>
            <td>{anime.type}</td>
        </tr>
    );
}

export default Anime;