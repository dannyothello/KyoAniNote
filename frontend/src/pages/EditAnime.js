import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditAnime = ({ animeToEdit }) => {

    const [title, setTitle] = useState(animeToEdit.title);
    const [score, setScore] = useState(animeToEdit.score);
    const [progress, setProgress] = useState(animeToEdit.progress);
    const [type, setType] = useState(animeToEdit.type);

    const history = useHistory();

    const editAnime = async () => {
        const editedAnime = { title, score, progress, type };
        const response = await fetch(`/animes/${animeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedAnime),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Edit successful");
        } else {
            alert(`Edit failure, status code = ${response.status}`);
        }
        history.push("/anime-list");
    };

    return (
        <div>
            <h1>Edit Anime</h1>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type="number"
                value={score}
                onChange={e => setScore(e.target.value)} />
            <input
                type="number"
                value={progress}
                onChange={e => setProgress(e.target.value)} />
            <select id="type" value={type} onChange={e => setType(e.target.value)} >
                <option value="TV Show">TV Show</option>
                <option value="Movie">Movie</option>
            </select>
            <button
                onClick={editAnime}
            >Update</button>
        </div>
    );
}

export default EditAnime;