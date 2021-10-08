import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Player from './components/player/Player';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './views/Homepage/HomePage';
import AlbumPage from './views/Albumpage/AlbumPage';

function App() {
  return (
    <Router>
      <Route path ='/' exact component={HomePage} />
      <Route path='/' component={Player} />
      <Route path='/' component={Sidebar} />
      <Route path="/album/album:id" exact component={AlbumPage} />
    </Router>
  );
}

export default App;
