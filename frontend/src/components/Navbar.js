import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item">
                <Link class="App-link" to="/"> <h4>Discover</h4> </Link>
            </li>
            <li class="nav-item">
                <Link class="App-link" to="/anime-list"> <h4>Anime List</h4></Link>
            </li>
        </ul>
    );
}

export default Navbar; 