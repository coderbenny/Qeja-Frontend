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
import ForSale from "./components/pages/ForSale";
import ForSaleByID from "./components/pages/ForSaleByID";
import RoomMates from "./components/pages/RoomMates";
import Rentals from "./components/pages/Rentals";
import NotFound from "./components/pages/NotFound";
import HouseDetails from "./components/pages/HouseDetails";

import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
import MateByID from "./components/pages/MateByID";

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
          <Route path="/properties-for-sale/:id" element={<ForSaleByID />} />
          <Route path="/properties-for-sale" element={<ForSale />} />
          <Route path="/room-mates/:id" element={<MateByID />} />
          <Route path="/room-mates" element={<RoomMates />} />
        </Route>

        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
