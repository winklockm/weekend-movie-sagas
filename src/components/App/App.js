import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>        
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/details/:id">
          <MovieDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
