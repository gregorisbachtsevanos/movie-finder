import { useEffect, useState } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_KEY = 'http://www.omdbapi.com?apikey=1136dc99'
const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    const searchMovies = async (title) => {
        const res = await fetch(`${API_KEY}&s=${title}`)
        const data = await res.json();
        // console.log(data.Search);
        setMovies(data.Search);
        // fetch(`${API_KEY}&s=${title}`)
        //     .then((res) => res.json())
        //     .then((data) => console.log(data.Search))
    }

    useEffect(() => {
        searchMovies('Superman')
    }, [])

    return (
        <div className='app'>

            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='Search'
                    onClick={() => searchMovies(searchTerm)}
                />  
            </div>
            {
                movies?.length > 0
                    ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie}/>
                        ))}
                    </div>)
                    : (
                        <div className='empty'>
                            <h2>No Movies</h2>
                        </div>
                    )
            }
           
        </div>
    )
}

export default App