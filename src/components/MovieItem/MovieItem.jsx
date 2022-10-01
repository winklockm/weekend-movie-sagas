import {useHistory} from 'react-router-dom';

function MovieItem({movie}) {

    const history = useHistory();
    
    const handleClick = () => {
        console.log('in handleClick. Here is movie.id', movie.id);
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