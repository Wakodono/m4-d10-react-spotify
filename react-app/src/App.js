import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Player from './components/player/Player';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './views/Homepage/HomePage';

function App() {
  return (
    <Router>
      <Route exact path ='/' component={HomePage} />
      <Route path='/' component={Player} />
      <Route path='/' component={Sidebar} />
    </Router>
  );
}

export default App;
