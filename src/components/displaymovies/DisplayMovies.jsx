import { useEffect, useState } from 'react';
import styles from './DisplayMovies.module.css';
import comment from '/icons/comment.png';
import like from '/icons/like.png';
import share from '/icons/share.png'


function DisplayMovies(){

    const [movies,setMovies]=useState([]);
    const base_image_url="https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        const movieUrl =`${process.env.REACT_APP_API_DOMAIN}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;
        fetch(movieUrl)
        .then(response =>{
            if(response.ok)
            {
                return response.json();
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        })
        .then(data=>
            {  
                console.log(data);
            setMovies(data.results)})
        .catch(error=>console.error("error : ",error));
        console.log(typeof(movies));
    },[])
    return(
        <div className={styles.container}>
           {
            movies.map((movie,index)=>(
            <div className={styles.container_child} key={index}>
                <div className={styles.main_image}>
                    <img src={base_image_url+movie.poster_path} alt="" />
                 </div>
            <div className={styles.movie_info}>
                <div className={styles.movie_heading}>
                    <h1>{movie.title}</h1>
                    <p>Release Date : <span>{movie.release_date}</span></p>
                </div>
                <div className={styles.movie_summary_row}>
                    <div className={styles.movie_summary_heading}>
                        <h5>SUMMARY</h5>
                    </div>
                    <div className={styles.movie_like_comments}>
                        <ul>
                            <li>
                                <img src={comment} alt="" />
                                <span></span>
                            </li>
                            <img src={like} alt="" />
                            <li>
                                <span>{movie.vote_average}</span>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.movie_description}>
                    <p>{movie.overview}</p>

                </div>
                <div className={styles.movie_actions}>
                    <div className={styles.movie_watch_btn}>
                        <button>More Details</button>
                    </div>
                    <div className={styles.movie_share}>
                        <img src={share} alt="" />
                    </div>

                </div>
            </div>
            </div>
           

            ))
           }
            </div>
    )
}
export default DisplayMovies;