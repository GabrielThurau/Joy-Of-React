// Exercise 1 applying css modules to components

//All sidenotes should have the wrapper class applied.
// The type property of the Sidenote should apply an additional class, which changes the color of the background and border.



import styles from './Sidenote.module.css';

function Sidenote({ type, title, children }) {
  const cssClass = `${styles.wrapper} ${styles[type]}`
  return (
    <aside className={cssClass}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Sidenote;


// Exercise #2: Movie ratings animation: Adding glowing-review class which produces an animation on 9.0 ratings and above


import React from 'react';

import styles from './Movie.module.css';

// Your mission:
// Apply the 'glowingReview' CSS class to the
// movie rating when it's 9 or higher.

function Movie({ movie }) {
  return (
    <article className={styles.movie}>
      <div className={styles.thumbnailWrapper}>
        <img
          alt="Movie poster"
          src={movie.posterSrc}
        />
      </div>
      <div className={styles.textWrapper}>
        <h2>{movie.title}</h2>
        <p className={styles.synopsis}>
          {movie.synopsis}
        </p>
        <p>
          <strong>Rating:</strong> {' '} 
          <span className={movie.rating >= 9 ? styles.glowingReview : undefined }>
              {movie.rating}
          </span>
        </p>
      </div>
    </article>
  );
}

export default Movie;