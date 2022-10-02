import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

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
        <>
            <Header />
            <div className='detailsDiv'>
                <Grid container>
                    <Grid 
                        item 
                        xs={12} 
                        lg={6} 
                        className='posterCell'>
                            <img 
                            className='fullPoster' 
                            src={movieDetails.poster} 
                            alt={movieDetails.title}/>
                    </Grid>
                    <Grid 
                        item
                        xs={12} 
                        lg={6}
                        className='textCell'>
                        <Stack spacing={4}>
                            <div>                    
                                <Typography variant="h4" gutterBottom>
                                    {movieDetails.title}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {movieDetails.description}
                                </Typography>
                            </div>
                            <div>
                                <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}>
                                    {movieGenres.map(genre => (
                                        <div key={genre} className='genreTags'>
                                            {genre}
                                        </div>
                                    ))}
                                </Stack>
                            </div>
                            <div>
                                <Button onClick={handleBack} variant="contained">Back to Movie List</Button>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default MovieDetails;