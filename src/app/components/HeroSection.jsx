"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section >
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">

          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-emerald-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Suraj",
                1000,
                "Front End Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A highly motivated and enthusiastic front-end developer passionate about creating interactive and user-friendly web applications, with a keen interest in building scalable and high-performance solutions. Eager to contribute to a dynamic development team by applying problem-solving skills and modern development practices.
            Key Skills:
            Frontend: React, Next.js, TypeScript
            Backend (Basic Knowledge): Node.js, Express.js, Socket.io

          </p>
          <div>
            <button

              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-emerald-500 hover:bg-slate-800 text-white mt-3"
            >
              <a href="/images/resume.pdf" download="Suraj's_Resume.pdf">Download CV</a>

            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;