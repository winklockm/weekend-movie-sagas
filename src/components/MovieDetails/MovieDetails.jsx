import {useHistory, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.movieDetails)

    const params = useParams();
    // params is an object with key id and value of the movie id that was clicked
    console.log('params:', params)

    useEffect(() => {
        const movieId = params.id
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieId
        })
    }, [])

    return (
        <>
        <p>{movieDetails.title}</p>
        <p>{movieDetails.description}</p>
        <img src={movieDetails.poster} alt={movieDetails.title}/>
        </>
    )
}

export default MovieDetails;