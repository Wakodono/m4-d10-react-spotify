import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from './components/Player/Player.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AlbumPage from './views/Albumpage/AlbumPage.jsx';
import ArtistPage from './views/Artistpage/ArtistPage.jsx';
import Homepage from './views/Homepage/HomePage.jsx';

const App = () => {
const [playing, setPlaying] = useState({})
  const handlePlaying = (track) => {
    setPlaying(track)
  }
  return (
    <Router>
      <Route path='/' exact component={Homepage}/>
      <Route path='/' render={()=> <Player song={{title: playing?.title, artist: playing?.artist?.name, demo: playing?.preview, cover: playing?.cover }}/>} />
      <Route path='/' component={Sidebar} />
      <Route path="/album/:id" exact render={(props)=> <AlbumPage {...props} passSong={handlePlaying}/>} />
      <Route path='/artist/:id' exact component={ArtistPage} />
    </Router>
  );
}

export default App;
