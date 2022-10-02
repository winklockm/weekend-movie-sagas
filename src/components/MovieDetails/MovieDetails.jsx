import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MovieDetails() {
    
    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.movieDetails)
    // movieGenres is an array
    const movieGenres = useSelector(store => store.genres)
    
    const params = useParams();
    const history = useHistory();
    // params is an object with key id and value of the movie id that was clicked
    console.log('params:', params)
        useEffect(() => {
        const movieId = params.id
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieId
        })
        return () => {
            dispatch({
                type: 'CLEAR_MOVIE_DETAILS'
            })
        }
    }, [params.id])

    const handleBack = () => {
        console.log('in handleBack');
        history.push(`/`);
    }
    console.log('movieGenres are:', movieGenres)
    return (

        // <p>{movieDetails.title}</p>
        // <p>{movieDetails.description}</p>
        // {movieGenres.map(genre => (
        //     <p key={genre}>{genre}</p>
        // ))}
        // <img src={movieDetails.poster} alt={movieDetails.title}/>
        


        <div className='itemContainer'>
            <div id='itemPoster'><img src={movieDetails.poster} alt={movieDetails.title}/></div>
            <div id='itemTitle'>
                <Typography variant="h4" gutterBottom>
                    {movieDetails.title}
                </Typography>
            </div>
            <div id='itemDescription'>
                <Typography variant="body1" gutterBottom>
                    {movieDetails.description}
                </Typography>
            </div>
            <div id='itemGenre'>
                {movieGenres.map(genre => (
                    <Typography variant="subtitle1" gutterBottom key={genre}>{genre}</Typography>
                ))}
            </div>
            <div id='itemBack'>
                <Button onClick={handleBack} variant="contained">Back to Movie List</Button>
            </div>
        </div>
    )
}

export default MovieDetails;