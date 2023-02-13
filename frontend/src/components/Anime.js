import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Anime({ anime, onDelete, onEdit }) {
    return (
        <tr>
            <td>{anime.title}</td>
            <td>{anime.score}</td>
            <td>{anime.progress}</td>
            <td>{anime.type}</td>
            <td>< MdEdit onClick={() => onEdit(anime)} /></td>
            <td>< MdDeleteForever onClick={() => { if (window.confirm('Are you sure you wish to delete this anime?')) onDelete(anime._id) }} /></td>
        </tr>
    );
}

export default Anime;