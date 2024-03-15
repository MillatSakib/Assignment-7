import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[700px] mt-10 rounded-3xl"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/MillatSakib/img-src/main/hero.png)",
        }}
      >
        <div className="hero-overlay bg-gradient-to-r from-[#000000d7] via-[#00000010] to-[#000000d7] rounded-3xl"></div>
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
              <button class="btn btn-success rounded-full px-8 font-bold">
                Success
              </button>
              <button class="btn btn-outline text-white rounded-full px-8 font-bold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
