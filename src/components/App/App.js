import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" gutterBottom>
        The Movies Saga
      </Typography>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
      </Router>
      <Typography variant="h6" gutterBottom>
        Made by Maggie
      </Typography>
    </div>
  );
}


export default App;
