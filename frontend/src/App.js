import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KyoAniList from "./pages/KyoAniList";
import KyoAniDB from "./pages/KyoAniDB";
import AddAnime from "./pages/AddAnime";
import EditAnime from "./pages/EditAnime";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="App-header">
          <Route path="/" exact>
            <KyoAniDB />
          </Route>
          <Route path="/anime-list">
            <KyoAniList />
          </Route>
          <Route path="/add-anime">
            <AddAnime />
          </Route>
          <Route path="/edit-anime">
            <EditAnime />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
