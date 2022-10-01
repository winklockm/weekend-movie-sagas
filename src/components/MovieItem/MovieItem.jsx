import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();
    

    const handleClick = () => {
        console.log('in handleClick. Here is movie.id', movie.id);
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movie.id
        })
        history.push(`/details/${movie.id}`);
    }

    return (
        <div onClick={handleClick} key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItem;