import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AddAnime = () => {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [score, setScore] = useState('');
    const [progress, setProgress] = useState('');
    const [type, setType] = useState('');

    const addAnime = async () => {
        const newAnime = { title, score, progress, type };
        const response = await fetch('/animes', {
            method: 'POST',
            body: JSON.stringify(newAnime),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the anime!");
        } else {
            alert(`Failed to add anime, status code = ${response.status}`);
        }
        history.push("/anime-list");
    };

    return (
        <div>
            <h1>Add Anime</h1>
            <input
                type="text"
                placeholder="Enter title here"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type="number"
                value={score}
                placeholder="Enter score here"
                onChange={e => setScore(e.target.value)} />
            <input
                type="number"
                value={progress}
                placeholder="Enter progress here"
                onChange={e => setProgress(e.target.value)} />
            <select id="type" value={type} onChange={e => setType(e.target.value)} >
                <option value="">--Choose type--</option>
                <option value="TV Show">TV Show</option>
                <option value="Movie">Movie</option>
            </select>
            <button
                onClick={addAnime}
            >Add</button>
        </div >
    );
}

export default AddAnime;