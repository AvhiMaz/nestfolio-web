import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
