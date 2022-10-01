import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails)
}

// **** SAGA FUNCTIONS ****

    function* fetchAllMovies() {
        // get all movies from the DB
        try {
            const moviesRes = yield axios.get('/api/movie');
            console.log('get all:', moviesRes.data);
            yield put({ type: 'SET_MOVIES', payload: moviesRes.data });

        } catch {
            console.log('get all error');
        }
    }

    function* fetchMovieDetails(action) {
        // get one movie from the DB
        try {
            const movieId = action.payload
            const movieDetailsRes = yield axios({
                method: 'GET',
                url: `/api/movie/${movieId}`
            })
            yield put({
                type: 'SET_MOVIE_DETAILS',
                payload: movieDetailsRes.data
            })
        } catch {
            console.log('error in fetchMovieDetails')
        }
    }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// **** REDUCERS ****

    // Used to store movies returned from the server
    const movies = (state = [], action) => {
        switch (action.type) {
            case 'SET_MOVIES':
                return action.payload;
            default:
                return state;
        }
    }

    const movieDetails = (state = {}, action) => {
        switch (action.type) {
            case 'SET_MOVIE_DETAILS':
                return action.payload
            default:
                return state
        }
    }

    // Used to store the movie genres
    const genres = (state = [], action) => {
        switch (action.type) {
            case 'SET_GENRES':
                return action.payload;
            default:
                return state;
        }
    }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
