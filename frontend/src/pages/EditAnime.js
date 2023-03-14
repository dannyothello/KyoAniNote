import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditAnime = ({ animeToEdit }) => {

    const [title, setTitle] = useState(animeToEdit.title);
    const [story, setStory] = useState(animeToEdit.story);
    const [animation, setAnimation] = useState(animeToEdit.animation);
    const [progress, setProgress] = useState(animeToEdit.progress);
    const [type, setType] = useState(animeToEdit.type);

    const history = useHistory();

    const editAnime = async () => {
        const editedAnime = { title, story, animation, progress, type };
        const response = await fetch(`https://kyoaninote-production.up.railway.app/animes/${animeToEdit._id}`, {
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
                value={story}
                onChange={e => setStory(e.target.value)} />
            <input
                type="number"
                value={animation}
                onChange={e => setAnimation(e.target.value)} />
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