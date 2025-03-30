import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero-bg min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="text-center max-w-4xl mx-auto mt-56">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="gradient-text">AI DAO GOVERNANCE</span>
          <br />
          <span className="text-white text-7xl tracking-tighter">
            FOR ACTIVE COMMUNITIES
          </span>
        </h1>

        <p className="text-lg mb-10 mt-10">
          Take your DAO to the next level with intelligent governance. Make
          data-driven decisions, automate operations, and enhance
          transparency-all powered by AI.
          <span className="text-blue-400">NESTFOLIO</span> now
        </p>

        <div className="flex gap-2 items-center justify-center mb-10">
          <button className="bg-white text-black font-medium text-xl rounded-full mb-8 py-2 px-10">
            Explore
          </button>

          <button className="font-medium text-xl rounded-full mb-8 py-2 px-10 border ">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center border-white border-8 rounded-3xl mb-36">
        <video
          autoPlay
          loop
          muted
          width="1440"
          height="920"
          preload="none"
          className="flex items-center justify-center rounded-2xl"
        >
          <source src="capstone.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
