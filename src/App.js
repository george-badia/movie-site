// // b9cc5a2b  OMBb API KEY
// import "./App.css";
// import LoginAndSignUp from "./components/LoginAndSignUp";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <LoginAndSignUp />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && <Navbar />}
      <Outlet />
      {location.pathname !== "/signup" && <Footer />}
    </div>
  );
}

export default App;
