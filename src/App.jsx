import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";

export default function Layout() {
  const [locationDetails, setLocationDetails] = useState(null);
  const location = useLocation();

  // Fetch geolocation (only once)
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          "http://api.ipstack.com/check?access_key=YOUR_ACCESS_KEY"
        );
        const data = await response.json();
        setLocationDetails(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };
    fetchLocation();
  }, []);

  // Track page view on route change
  useEffect(() => {
    if (locationDetails) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname,
        title: document.title,
        location: locationDetails.city
          ? `${locationDetails.city}, ${locationDetails.country_name}`
          : "Unknown",
        country: locationDetails.country_name || "Unknown",
      });
    }
  }, [location, locationDetails]);

  // Track time spent
  useEffect(() => {
    const startTime = performance.now();
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((performance.now() - startTime) / 1000);
      ReactGA.event({
        category: "Page Engagement",
        action: "Time Spent on Page",
        label: location.pathname,
        value: timeSpent,
      });
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [location]);

  return (
    <div className="overflow-hidden App">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* skill */}
          <Route path="/skill" element={<Skill />} />
          {/* Projects */}
          <Route path="/project" element={<Projects />} />
          {/* linkedin */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </motion.main>
    </div>
  );
}
