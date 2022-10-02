import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import Grid from '@mui/material/Grid';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
                <Grid container spacing={6}>
                    {movies.map(movie => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={movie.id}>
                            <MovieItem key={movie.id} movie={movie} />
                        </Grid>
                    ))}
                </Grid>
        </main>
    );
}

export default MovieList;