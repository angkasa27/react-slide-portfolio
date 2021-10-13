import React from "react";
import Main from "../../elements/Main/Main";
import { Highlight1, Highlight2 } from "../../assets/SVG";

export default function Home() {
  const blob = (
    <>
      <div className="absolute opacity-50 left-1/4 bottom-3/4 hidden md:block overflow-hidden">
        <Highlight1 className="animate-scale show-300 after-2200" />
      </div>
      <div className="absolute opacity-50 right-0 md:right-1/5 md:top-3/4 top-full transform -rotate-90 overflow-hidden">
        <Highlight2 className="animate-scale show-300 after-2200" />
      </div>
    </>
  );
  return (
    <Main
      bgClass="bg-blue-400"
      className="flex flex-col items-center justify-center text-white mt-screen10 md:mt-0 relative"
    >
      {blob}
      <div className="overflow-hidden">
        <h2 className="text-blue-600 font-hand animate-itemRight after show-500">
          Hi there!
        </h2>
        <h1 className="mr-3 animate-itemUp after-400 show-300 mt-2 flex">
          {"IM "}
          <p className="ml-3 md:ml-5 transition-all duration-300 transform hover:scale-110 hover:-rotate-2 flex hover:flex-row-reverse">
            <span>D</span>
            <span>I</span>
            <span>M</span>
            <span>A</span>
            <span>S</span>
          </p>
        </h1>
      </div>
      <div className="overflow-hidden mt-4 md:mt-2">
        <h4 className="text-blue-200 uppercase animate-itemUp after-1000 show-300 text-center">
          I'm a FrontEnd Developer and Graphic Designer
        </h4>
      </div>
      <div className="overflow-hidden">
        <h4 className="text-blue-200 uppercase animate-itemUp  after-1200 show-300 text-center">
          Currently working at Telkom Indonesia
        </h4>
      </div>

      <div className="flex text-blue-400 mt-4 md:mt-8 flex-col md:flex-row items-center">
        <div className=" mt-6 md:mt-0 md:mx-3 w-56 md:w-auto animate-scale show-200 after-1800">
          <a
            href="https://instagram.com/angka.asa"
            target="_blank"
            rel="noreferrer"
            className="button-primary flex justify-center w-full"
          >
            Instagram
          </a>
        </div>
        <div className=" mt-6 md:mt-0 md:mx-3 w-56 md:w-auto animate-scale show-200 after-1600">
          <a
            href="https://github.com/angkasa27"
            target="_blank"
            rel="noreferrer"
            className="button-primary flex justify-center w-full"
          >
            GitHub
          </a>
        </div>
        <div className=" mt-6 md:mt-0 md:mx-3 w-56 md:w-auto animate-scale show-200 after-2000">
          <a
            href="https://dribbble.com/angkasa27"
            target="_blank"
            rel="noreferrer"
            className="button-primary flex justify-center w-full"
          >
            Dribble
          </a>
        </div>
        <div className=" mt-6 md:mt-0 md:mx-3 w-56 md:w-auto animate-scale show-200 after-2200">
          <a
            href="https://www.linkedin.com/in/dimas-angkasa-nurindra-a1750719b/"
            target="_blank"
            rel="noreferrer"
            className="button-primary flex justify-center w-full"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Main>
  );
}
