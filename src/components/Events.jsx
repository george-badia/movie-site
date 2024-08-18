import React from 'react';
import './Events.css';

const movies = [
  {
    id: 1,
    title: 'Inception',
    poster: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    description: 'A mind-bending thriller by Christopher Nolan.',
    time: '7:00 PM',
    price: 15,
    venue: 'Grand Cinema Hall'
  },
  {
    id: 2,
    title: 'Interstellar',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    description: 'A science fiction epic that explores the far reaches of space.',
    time: '8:30 PM',
    price: 18,
    venue: 'Starlight Theater'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    description: 'Batman faces the Joker in this iconic superhero film.',
    time: '10:00 PM',
    price: 20,
    venue: 'Empire State Cinema'
  },
  {
    id: 4,
    title: 'The Matrix',
    poster: 'https://image.tmdb.org/t/p/w500/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg',
    description: 'A hacker discovers the truth about his reality in this sci-fi classic.',
    time: '9:00 PM',
    price: 14,
    venue: 'Neon Lights Venue'
  },
  {
    id: 5,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    poster: 'https://image.tmdb.org/t/p/w500/56zTpe2xvaA4alU51sRWPoKPYZy.jpg',
    description: 'The epic journey begins in this fantasy adventure.',
    time: '5:00 PM',
    price: 20,
    venue: 'Hobbiton Theater'
  },
  {
    id: 6,
    title: 'Gladiator',
    poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    description: 'A Roman general seeks revenge in this historical drama.',
    time: '8:00 PM',
    price: 16,
    venue: 'Colosseum Arena'
  },
  {
    id: 7,
    title: 'The Godfather',
    poster: 'https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg',
    description: 'The story of a powerful Italian-American crime family.',
    time: '6:30 PM',
    price: 18,
    venue: 'Sicilian Lounge'
  },
  {
    id: 8,
    title: 'Avatar',
    poster: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
    description: 'A paraplegic marine on an alien planet becomes part of the local tribe.',
    time: '8:00 PM',
    price: 20,
    venue: 'Pandora Theater'
  },
  {
    id: 9,
    title: 'The Shawshank Redemption',
    poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    description: 'A man wrongfully imprisoned finds hope in the darkest of places.',
    time: '7:30 PM',
    price: 15,
    venue: 'Redemption Hall'
  },
  {
    id: 10,
    title: 'Fight Club',
    poster: 'https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg',
    description: 'A disillusioned man forms an underground fight club.',
    time: '9:30 PM',
    price: 15,
    venue: 'Underground Club'
  },
  {
    id: 11,
    title: 'Forrest Gump',
    poster: 'https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg',
    description: 'The life story of an extraordinary man with a simple heart.',
    time: '4:30 PM',
    price: 14,
    venue: 'Heartland Cinema'
  },
  {
    id: 12,
    title: 'Jurassic Park',
    poster: 'https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg',
    description: 'A theme park with living dinosaurs faces disaster.',
    time: '6:00 PM',
    price: 16,
    venue: 'Dino Arena'
  },
  {
    id: 13,
    title: 'The Lion King',
    poster: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
    description: 'A young lion prince flees his kingdom only to return later to reclaim it.',
    time: '3:00 PM',
    price: 12,
    venue: 'Pride Rock Theater'
  },
  {
    id: 14,
    title: 'Back to the Future',
    poster: 'https://image.tmdb.org/t/p/w500/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg',
    description: 'A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean.',
    time: '8:00 PM',
    price: 16,
    venue: 'Time Travel Cinema'
  },
  {
    id: 15,
    title: 'The Avengers',
    poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    description: 'Earth\'s mightiest heroes must come together to stop a global threat.',
    time: '7:00 PM',
    price: 19,
    venue: 'Heroic Hall'
  }
];

function Events() {
  return (
    <div className="Events">
      <header className="header">
        <h1> Movie Events & Booking</h1>
      </header>
      <main>
        <section className="movies">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} className="poster" />
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p className="time">{movie.time}</p>
                <p className="time">${movie.price}</p>
                <h2>{movie.venue}</h2>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Events;
