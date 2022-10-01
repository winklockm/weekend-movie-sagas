import {useHistory, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    
    const history = useHistory();
    const params = useParams();
    // params is an object with key id and value of the movie id that was clicked
    console.log('params:', params)

    

    return (
        <p>MovieDetails component</p>
    )
}

export default MovieDetails;