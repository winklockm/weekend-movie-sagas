import {useHistory} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function MovieItem({movie}) {

    const history = useHistory();
    
    const handleClick = () => {
        console.log('in handleClick. Here is movie.id', movie.id);
        history.push(`/details/${movie.id}`);
    }

    return (
        <Grid 
        container
        justifyContent="center"
        className='thumbnailPoster'
        key={movie.id}>
            <Grid 
            item 
            xs={12}>
                <img 
                onClick={handleClick}
                className='thumb'
                src={movie.poster} 
                alt={movie.title}/>
            </Grid>
            <Grid 
            item 
            xs={10}>
                <Typography 
                onClick={handleClick} 
                variant="h6" 
                gutterBottom>
                    {movie.title}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MovieItem;