import React from 'react';
import Anime from './Anime';

function AnimeList({ animes, onDelete, onEdit }) {
    return (
        <table id="animes">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Score</th>
                    <th>Progress</th>
                    <th>Type</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {animes.map((anime, i) => <Anime anime={anime}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default AnimeList;
