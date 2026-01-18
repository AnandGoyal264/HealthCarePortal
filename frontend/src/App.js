import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ProtectedRoute from "./assets/components/Protected";

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Dashboard from "./assets/pages/Dashboard";
import Appointments from "./assets/pages/Appointments";
import WellnessTracker from "./assets/pages/WellnessTracker";
import HealthTips from "./assets/pages/HealthTips";
import NotFound from "./assets/pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/wellness" element={<WellnessTracker />} />
          </Route>

          <Route path="/tips" element={<HealthTips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
