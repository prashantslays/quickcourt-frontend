import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VenueListing from "./pages/Venuelisting";
import VenueDetails from "./pages/Venuedetails";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import OwnerDashboard from "./pages/Ownerdashboard";
import AdminDashboard from "./pages/adminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/venues" element={<VenueListing />} />
        <Route path="/venue/:id" element={<VenueDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;