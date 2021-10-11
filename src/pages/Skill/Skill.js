import React from "react";
import Main from "../../elements/Main/Main";

export default function Skill() {
  return (
    <Main
      bgClass="bg-purple2"
      className="flex items-center justify-between flex-col md:flex-row"
    >
      <div className="overflow-hidden ">
        <h2 className="text-white font-bold animate-itemRight show-300 after-300">
          This is
        </h2>
        <h1 className="text-purple2-dark font-bold font-hand pr-2 pb-12 animate-itemUpFar show-300 after-600 leading-5">
          mySkills
        </h1>
      </div>
      <div className="relative h-96 md:w-2/3 w-full animate-scale after-1000 show-500 mt-20">
        <h2 className="text-purple2-light absolute font-hand main-hover md:top-0 md:right-1/3 top-0 right-0 animate-upDown show-4000 ">
          Java Script
        </h2>
        <h3 className="text-purple2-light absolute main-hover md:top-1/4 md:left-1/4 bottom-3/4 right-1/2 animate-upDown show-8000 ">
          ReactJs
        </h3>
        <h3 className="text-purple2-dark  absolute font-hand main-hover md:top-1/2 md:left-2/3 top-1/3 left-1/2 animate-upDown show-6000 ">
          MaterialUI
        </h3>
        <h2 className="text-purple2-dark  absolute main-hover md:top-1/3 md:left-2/4 animate-upDown show-10000 ">
          CSS
        </h2>
        <h2 className="text-purple2-dark  absolute font-hand main-hover md:bottom-1/4 md:left-1/4 animate-upDown show-8000 ">
          TailwindCSS
        </h2>
        <h3 className="text-purple2-light absolute main-hover md:bottom-0 md:right-1/4 animate-upDown show-6000 ">
          NodeJS
        </h3>
      </div>
    </Main>
  );
}
