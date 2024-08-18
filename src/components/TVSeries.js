import React, { useState, useEffect } from "react";
import SeriesCard from "./SeriesCard";
import "./TVSeries.css";

function TVSeries() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const mockSeries = [
      {
        id: 1,
        title: "Stranger Things",
        image:
          "https://i.pinimg.com/236x/11/a2/23/11a223db66e5c55284693ae776664eef.jpg",
        price: 10,
        totalTickets: 100,
        availableTickets: 100,
      },
      {
        id: 2,
        title: "The Witcher",
        image:
          "https://i.pinimg.com/236x/8e/1a/1a/8e1a1a3913fd44a2188dac98602a7a81.jpg",
        price: 12,
        totalTickets: 80,
        availableTickets: 80,
      },
      {
        id: 3,
        title: "The Boys",
        image:
          "https://i.pinimg.com/236x/72/bc/de/72bcde46112c4b1ae9f0929598e3c472.jpg",
        price: 15,
        totalTickets: 142,
        availableTickets: 142,
      },
      {
        id: 4,
        title: "House Of Dragon",
        image:
          "https://i.pinimg.com/236x/57/a5/6e/57a56e2dc6ccf6c00554c5d1c0c3a4c7.jpg",
        price: 13,
        totalTickets: 87,
        availableTickets: 87,
      },
      {
        id: 5,
        title: "Supacell",
        image:
          "https://i.pinimg.com/236x/5b/f8/61/5bf861972f9f748e18bcbe88df4132ea.jpg",
        price: 11,
        totalTickets: 100,
        availableTickets: 100,
      },
      {
        id: 6,
        title: "Dark Matter",
        image:
          "https://i.pinimg.com/236x/76/05/da/7605da2fb1f84933143c5255d8a5884f.jpg",
        price: 14,
        totalTickets: 110,
        availableTickets: 110,
      },
      {
        id: 7,
        title: "Ozark",
        image:
          "https://i.pinimg.com/236x/d2/1d/81/d21d81e4021a66596f064d5f23b7dd5d.jpg",
        price: 12,
        totalTickets: 90,
        availableTickets: 90,
      },
      {
        id: 8,
        title: "Riverdale",
        image:
          "https://i.pinimg.com/236x/5e/53/ff/5e53ff806c764f93a11407211be0572f.jpg",
        price: 10,
        totalTickets: 45,
        availableTickets: 45,
      },
    ];
    setSeries(mockSeries);
  }, []);

  const handleBuyTicket = (id) => {
    setSeries(
      series.map((s) =>
        s.id === id && s.availableTickets > 0
          ? { ...s, availableTickets: s.availableTickets - 1 }
          : s
      )
    );
  };

  return (
    <div className="tv-series">
      <header className="header">
        <h1> Tv Series</h1>
      </header>
      <div className="series-grid">
        {series.map((s) => (
          <SeriesCard
            key={s.id}
            series={s}
            onBuyTicket={() => handleBuyTicket(s.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TVSeries;
