import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KyoAniList from "./pages/KyoAniList";
import KyoAniDB from "./pages/KyoAniDB";
import AddAnime from "./pages/AddAnime";
import EditAnime from "./pages/EditAnime";
import { useState } from 'react';

function App() {
  const [animeToEdit, setAnimeToEdit] = useState();

  return (
    <div className="App">
      <header>
        <h1>KyoAniList</h1>
        <p>
          Discover and track your favorite Kyoto Animation media
        </p>
      </header>
      <Router>
        <Navbar />
        <div className="App-header">
          <Route path="/" exact>
            <KyoAniDB />
          </Route>
          <Route path="/anime-list">
            <KyoAniList setAnimeToEdit={setAnimeToEdit} />
          </Route>
          <Route path="/add-anime/:title?/:type?" component={AddAnime}>
            <AddAnime />
          </Route>
          <Route path="/edit-anime">
            <EditAnime animeToEdit={animeToEdit} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
