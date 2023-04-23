import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  /** @type {[Object, Function]} */
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <img
            className={styles.backgroundImage}
            src={movie.background_image}
            alt={movie.title}
          ></img>
          <div className={styles.info}>
            <img
              className={styles.coverImage}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
            <div className={styles.metadata}>
              <div className={styles.titleAndYear}>
                <h2 className={styles.title}>{movie.title}</h2>
                <span className={styles.time}>
                  {movie.year}년·{movie.runtime}분
                </span>
              </div>
              <div className={styles.figure_container}>
                <h3>Figures</h3>
                <ul className={styles.figures}>
                  <li>rate: {movie.rating}</li>
                  <li>download: {movie.download_count}</li>
                  <li>rate: {movie.like_count}</li>
                </ul>
              </div>

              <div className={styles.description_container}>
                <h3>Description</h3>
                <p>{movie.description_full}</p>
              </div>
              <div className={styles.genre_contaier}>
                <h3>Genres</h3>
                <ul>
                  {movie.genres &&
                    movie.genres.map((genre) => <li>{genre}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
