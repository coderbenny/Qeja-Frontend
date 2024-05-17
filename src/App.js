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
import UserProfile from "./components/pages/UserProfile";
import OtherProfile from "./components/pages/OtherProfile";
import Explore from "./components/pages/Explore";
import PostDetails from "./components/ui/PostDetails";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/Auth/RequireAuth";
// import MateByID from "./components/pages/MateByID";
import axios from "./components/context/axios";

function App() {
  // Activating render backend when user visits the website
  useEffect(() => {
    const activateBackend = async () => {
      try {
        const res = await axios.get("/");
        if (res.status === 200) {
          const data = await res.data;
          console.log(data);
        }
      } catch (error) {
        console.log("An error occured:", error);
      }
    };
    activateBackend();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/community-chat" element={<CommChat />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/posts/:id" element={<PostDetails />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/rentals/:id" element={<HouseDetails />} />
          <Route path="/properties-for-sale/:id" element={<ForSaleByID />} />
          <Route path="/properties-for-sale" element={<ForSale />} />
          {/* <Route path="/room-mates/:id" element={<MateByID />} /> */}
          <Route path="/room-mates" element={<RoomMates />} />
          <Route path="/profiles/:id" element={<OtherProfile />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>

        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
