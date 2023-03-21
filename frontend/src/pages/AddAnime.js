import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AddAnime = () => {

    const history = useHistory();
    let arrayFragment = window.location.href.split('/');
    const discoverTitle = arrayFragment[arrayFragment.length - 2]
    const discoverType = arrayFragment[arrayFragment.length - 1]

    let [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [animation, setAnimation] = useState('')
    const [progress, setProgress] = useState('');
    const [type, setType] = useState('');

    const addAnime = async () => {
        const newAnime = { title, story, animation, progress, type };
        const response = await fetch('https://kyoani-note.onrender.com/animes', {
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

    useEffect(() => {
        if (discoverTitle !== ("localhost:8000") && discoverTitle !== ("willowy-elf-fe3321.netlify.app")) {
            setTitle(decodeURI(discoverTitle))
        }
        if (discoverType) {
            setType(decodeURI(discoverType))
        }
    }, [discoverTitle, discoverType]);

    return (
        <div>
            <h1>Add Anime</h1>
            <input
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={e => setTitle(e.target.value)} />
            <input
                type="number"
                value={story}
                placeholder="Enter story score"
                onChange={e => setStory(e.target.value)} />
            <input
                type="number"
                value={animation}
                placeholder="Enter animation score"
                onChange={e => setAnimation(e.target.value)} />
            <input
                type="number"
                value={progress}
                placeholder="Enter progress"
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