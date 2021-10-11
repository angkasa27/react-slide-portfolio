import React from "react";
import Main from "../../elements/Main/Main";

export default function Home() {
  return (
    <Main
      bgClass="bg-blue2"
      className="flex flex-col items-center justify-center text-white "
    >
      <div className="overflow-hidden">
        <h2 className="text-blue2-dark font-hand animate-itemRight after show-500">
          Hi there!
        </h2>
        <h1 className="mr-3 animate-itemUp after-400 show-300 mt-2 flex">
          {"IM "}
          <p className="ml-3 md:ml-5 transition-all duration-300 transform hover:scale-110 hover:-rotate-2 hover:text-blue2-light">
            DIMAS
          </p>
        </h1>
      </div>
      <div className="overflow-hidden mt-4 md:mt-2">
        <h4 className="text-blue2-light uppercase animate-itemUp after-1000 show-300 text-center">
          I'm a FrontEnd Developer and Graphic Designer
        </h4>
      </div>
      <div className="overflow-hidden">
        <h4 className="text-blue2-light uppercase animate-itemUp  after-1200 show-300 text-center">
          Currently working at Telkom Indonesia
        </h4>
      </div>

      <div className="flex text-blue2 mt-4 md:mt-8 flex-col md:flex-row">
        <a
          href="https://instagram.com/angka.asa"
          target="_blank"
          rel="noreferrer"
          className="button-primary mt-4 md:mt-0 md:mx-3 md:w-auto w-56 animate-scale show-200 after-1600"
        >
          Instagram
        </a>
        <a
          href="https://github.com/angkasa27"
          target="_blank"
          rel="noreferrer"
          className="button-primary mt-4 md:mt-0 md:mx-3 md:w-auto w-56 animate-scale show-200 after-1400"
        >
          GitHub
        </a>
        <a
          href="https://dribbble.com/angkasa27"
          target="_blank"
          rel="noreferrer"
          className="button-primary mt-4 md:mt-0 md:mx-3 md:w-auto w-56 animate-scale show-200 after-1800"
        >
          Dribble
        </a>
        <a
          href="https://www.linkedin.com/in/dimas-angkasa-nurindra-a1750719b/"
          target="_blank"
          rel="noreferrer"
          className="button-primary mt-4 md:mt-0 md:mx-3 md:w-auto w-56 animate-scale show-200 after-2000"
        >
          LinkedIn
        </a>
      </div>
    </Main>
  );
}
