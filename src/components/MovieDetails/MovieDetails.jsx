import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
                <Grid container className='detailsContainer' justifyContent="center">
                    <Grid 
                        item 
                        xs={12}
                        lg={6}>
                            <img 
                            className='posterImg' 
                            src={movieDetails.poster} 
                            alt={movieDetails.title}/>
                    </Grid>
                    <Grid 
                        item
                        xs={12} 
                        lg={6}
                        className='textCell'>
                        <div className='subtextCell'>
                            <div className='titleDiv'>                    
                                <Typography className='details' variant="h4" gutterBottom>
                                    {movieDetails.title}
                                </Typography>
                            </div>
                            <div className='descriptionDiv'>
                                <Typography className='details' variant="body1" gutterBottom>
                                    {movieDetails.description}
                                </Typography>
                            </div>
                            <div className='genreDiv'>
                                {movieGenres.map(genre => (
                                    <span key={genre} className='genreTags'>
                                        {genre}
                                    </span>
                                ))}
                            </div>
                            <div className='buttonDiv'>
                                <Button onClick={handleBack} variant="outlined">Return to Movie List</Button>
                            </div>
                        </div>
                    </Grid>            
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default MovieDetails;