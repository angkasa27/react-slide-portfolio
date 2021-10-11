import React from "react";
import Main from "../../elements/Main/Main";

export default function About() {
  return (
    <Main
      bgClass="bg-orange2"
      className="flex justify-center items-center text-orange2-light"
    >
      <div>
        <h2 className="text-white">
          Dimas Angkasa <span className="text-orange2-dark">Nurindra</span>
        </h2>

        <h4 className="w-1/2">
          I want to connect with a lot of people from anywhere arround the
          globe, I love challange, and I love to learn new things
        </h4>
        <div className="flex text-orange2 mt-4 md:mt-8 flex-col md:flex-row">
          <a
            href="https://dribbble.com/angkasa27"
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-4 md:mt-0 md:mx-3 md:w-auto w-56 animate-scale show-200 after-1800"
          >
            Dribble
          </a>
        </div>
      </div>
    </Main>
  );
}
