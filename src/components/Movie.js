import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ id, coverImg, title, summary, genres, year }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={coverImg} alt={title} />
      <div className={styles.info}>
        <div className={styles.titleAndYear}>
          <h2 className={styles.title}>
            <Link className={styles.link} to={`/movie/${id}`}>
              {title}
            </Link>
          </h2>
          <span className={styles.year}>{year}</span>
        </div>
        <p className={styles.summary}>{summary}</p>
        <ul className={styles.genres}>
          {genres && genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
