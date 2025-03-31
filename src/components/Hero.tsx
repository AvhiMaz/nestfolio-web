import React from "react";
import { AnimatedShinyTextDemo } from "./badge";
import { AvatarCirclesDemo } from "./avatar";
import { BentoDemo } from "./bento";
import { Link } from "react-router-dom";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <div className="hero-bg min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <div className="text-center max-w-4xl mx-auto mt-56">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <AnimatedShinyTextDemo />
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
        </p>

        <div className="flex gap-2 items-center justify-center mb-10">
          <Link to="https://t.me/nestfolioDAO_bot">
            <button className="bg-white text-black font-medium text-xl rounded-full mb-8 py-2 px-10">
              Explore
            </button>
          </Link>

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
      <div className="mb-20 w-[1000px]">
        <p className="text-6xl text-center font-bold mb-10">How It Works</p>
        <BentoDemo />
      </div>
      <div className="mb-20">
        <AvatarCirclesDemo />
      </div>
      <div>
        <h1 className="mb-10">
          Design and build by{" "}
          <Link to="https://x.com/avhidotsol" className="underline italic">
            Avhi
          </Link>{" "}
          &{" "}
          <Link to="https://x.com/4rjun" className="underline italic">
            Arjun
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
