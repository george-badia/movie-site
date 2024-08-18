import React from "react";
import "./Posters.css";

function Posters({ title, imageUrl, price }) {
  const ticketClick = () => {
    alert(`You have succesfully purchased a ticket for ${title}!`);
  };

  return (
    <div className="movie-poster">
      <img src={imageUrl} alt={`${title} poster`} />
      <h2>{title}</h2>
      <div className="ticket-data">
        <button onClick={ticketClick} className="ticket-button">
          Ticket
        </button>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default Posters;

// import React from "react";
// import "./Posters.css";

// function Posters({ title, imageUrl, price }) {
//   const ticketClick = () => {
//     alert(`You have successfully purchased a ticket for ${title}!`);
//   };

//   return (
//     <div className="movie-poster">
//       <img src={imageUrl} alt={`${title} poster`} />
//       <h2>{title}</h2>
//       <div className="ticket-data">
//         <button onClick={ticketClick} className="ticket-button">
//           Ticket
//         </button>
//         <span className="price">{price}</span>
//       </div>
//     </div>
//   );
// }

// export default Posters;
