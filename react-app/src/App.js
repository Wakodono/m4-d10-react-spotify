import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './views/HomePage/HomePage'
import Player from './components/player/Player';

function App() {
  return (
    <Router>
      <Route path exact="/" component={HomePage} />
      <Route path="/" component={Player} />
    </Router>
  );
}

export default App;
