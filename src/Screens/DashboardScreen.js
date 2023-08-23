import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const DashboardScreen = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default DashboardScreen;
