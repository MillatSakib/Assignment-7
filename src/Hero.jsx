import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mt-10 rounded-3xl"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:max-w-[80%]">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and master Basic Programming, Data Structure, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
