import React from 'react';
import './LatestMovies.css'

// Movie data
const moviesData = {
  "movies": [
    {
      "Title": "Guardians of the Galaxy Vol. 2",
      "Year": "2017",
      "Rated": "PG-13",
      "Released": "05 May 2017",
      "Runtime": "136 min",
      "Genre": "Action, Adventure, Comedy",
      "Director": "James Gunn",
      "Writer": "James Gunn, Dan Abnett, Andy Lanning",
      "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
      "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "85%"
        },
        {
          "Source": "Metacritic",
          "Value": "67/100"
        }
      ],
      "Metascore": "67",
      "imdbRating": "7.6",
      "imdbVotes": "768,933",
      "imdbID": "tt3896198",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "$389,813,101",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
      "Poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "86%"
        },
        {
          "Source": "Metacritic",
          "Value": "74/100"
        }
      ],
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,710,621",
      "imdbID": "tt1375666",
      "Type": "movie",
      "DVD": "07 Dec 2010",
      "BoxOffice": "$292,576,195",
      "Production": "Warner Bros. Pictures",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "Rated": "R",
      "Released": "31 Mar 1999",
      "Runtime": "136 min",
      "Genre": "Action, Sci-Fi",
      "Director": "Lana Wachowski, Lilly Wachowski",
      "Writer": "Lana Wachowski, Lilly Wachowski",
      "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      "Plot": "A hacker discovers the truth about his reality and his role in the war against its controllers.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 40 wins & 69 nominations total",
      "Poster": "https://image.tmdb.org/t/p/w500/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
        },
        {
          "Source": "Metacritic",
          "Value": "73/100"
        }
      ],
      "Metascore": "73",
      "imdbRating": "8.7",
      "imdbVotes": "1,629,789",
      "imdbID": "tt0133093",
      "Type": "movie",
      "DVD": "22 Sep 1999",
      "BoxOffice": "$463,517,848",
      "Production": "Warner Bros.",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "Rated": "R",
      "Released": "14 Oct 1994",
      "Runtime": "142 min",
      "Genre": "Drama",
      "Director": "Frank Darabont",
      "Writer": "Stephen King (short story), Frank Darabont",
      "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
      "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 7 Oscars. 40 wins & 60 nominations total",
      "Poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "9.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
        },
        {
          "Source": "Metacritic",
          "Value": "80/100"
        }
      ],
      "Metascore": "80",
      "imdbRating": "9.3",
      "imdbVotes": "2,525,758",
      "imdbID": "tt0111161",
      "Type": "movie",
      "DVD": "01 Aug 2000",
      "BoxOffice": "$28,341,469",
      "Production": "Columbia Pictures",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Parasite",
      "Year": "2019",
      "Rated": "R",
      "Released": "27 May 2019",
      "Runtime": "132 min",
      "Genre": "Comedy, Drama, Thriller",
      "Director": "Bong Joon-ho",
      "Writer": "Bong Joon-ho, Han Jin-won",
      "Actors": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
      "Plot": "A poor family schemes to become employed by a wealthy family and infiltrate their household.",
      "Language": "Korean",
      "Country": "South Korea",
      "Awards": "Won 4 Oscars. 250 wins & 342 nominations total",
      "Poster": "https://assets.mubicdn.net/images/notebook/post_images/29832/images-w1400.jpg?1579570864",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "98%"
        },
        {
          "Source": "Metacritic",
          "Value": "96/100"
        }
      ],
      "Metascore": "96",
      "imdbRating": "8.6",
      "imdbVotes": "489,379",
      "imdbID": "tt6751668",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "$263,015,000",
      "Production": "CJ Entertainment",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "felloship of the ring",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 152 wins & 218 nominations total",
      "poster": "https://assets.mubicdn.net/images/notebook/post_images/29832/images-w1400.jpg?1579570864",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "86%"
        },
        {
          "Source": "Metacritic",
          "Value": "74/100"
        }
      ],
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,710,621",
      "imdbID": "tt1375666",
      "Type": "movie",
      "DVD": "07 Dec 2010",
      "BoxOffice": "$292,576,195",
      "Production": "Warner Bros. Pictures",
      "Website": "N/A",
      "Response": "True"
    },
  ]
};


const LatestMovies = () => {
  return (
    <div className='MoviesGrid'>
      {moviesData.movies.map((movie) => {
        const { Title, Runtime, Poster, imdbID } = movie;
        return (
          <div key={imdbID} className='MovieBox'>
            <div className='img'>
              <img src={Poster} alt={Title} />
            </div>
            <div className='text'>
              <h3>{Title}</h3>
              <span>{Runtime}</span>
              <button className='primary-btn'>
                <i className="fa fa-play"></i> PLAY NOW
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestMovies;
