import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link class="App-link" to="/"> Discover </Link> |
            <Link class="App-link" to="/anime-list"> Anime List </Link>
        </nav>
    );
}

export default Navbar; 