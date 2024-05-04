import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./components/pages/Home";
import Header from "./components/pages/Header";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Discover from "./components/pages/Discover";
import CommChat from "./components/pages/CommChat";
import Owners from "./components/pages/Owners";
import RoomMates from "./components/pages/RoomMates";
import Rentals from "./components/pages/Rentals";
import NotFound from "./components/pages/NotFound";
import HouseDetails from "./components/pages/HouseDetails";

import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
// import { useEffect } from "react";
// import axios from "./components/context/axios";
// import useAuth from "./components/hooks/useAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/community-chat" element={<CommChat />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/rentals/:id" element={<HouseDetails />} />
          <Route path="/property-owners" element={<Owners />} />
          <Route path="/room-mates" element={<RoomMates />} />
        </Route>

        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
