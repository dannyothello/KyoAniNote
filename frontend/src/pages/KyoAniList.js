import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import AnimeList from '../components/AnimeList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function KyoAniList({ setAnimeToEdit }) {
    const [animes, setAnimes] = useState([]);
    const history = useHistory();

    const onDelete = async id => {
        const response = await fetch(`https://kyoani-note.onrender.com/animes/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('https://kyoani-note.onrender.com/animes');
            const animes = await getResponse.json();
            setAnimes(animes);
        } else {
            console.error(`Could not delete anime with id = ${id}, status code = ${response.status}`)
        }
    };

    const onEdit = async animeToEdit => {
        setAnimeToEdit(animeToEdit);
        history.push("/edit-anime");
    }

    const loadAnimes = async () => {
        const response = await fetch('https://kyoani-note.onrender.com/animes');
        const animes = await response.json();
        setAnimes(animes);
    }

    useEffect(() => {
        loadAnimes();
    }, []);

    return (
        <>
            <h2>Kyoto Animation Media I'm Watching</h2>
            <AnimeList animes={animes} onDelete={onDelete} onEdit={onEdit}></AnimeList>
            <Link to="/add-anime">Add an anime</Link>
        </>
    );
}

export default KyoAniList;