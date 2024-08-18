import React from 'react';
import './SeriesCard.css';
function SeriesCard({ series, onBuyTicket }) {
  return (
    <div className="series-card">
      <img src={series.image} alt={series.title} />
      <div className="card-content">
        <h2>{series.title}</h2>
        <p>Available Tickets: {series.availableTickets} / {series.totalTickets}</p>
        <button onClick={onBuyTicket} disabled={series.availableTickets === 0}>
          {series.availableTickets > 0 ? 'Buy Ticket' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
}

export default SeriesCard;
//series.availableTickets
