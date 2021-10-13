import React, { useState } from "react";
import Main from "../../elements/Main/Main";
import { Arrow3 } from "../../assets/SVG";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import projects from "../../constant/projects";

export default function Container() {
  const [position, setPosition] = useState(0);

  const nextPosition = () => {
    // setClasses("fadeNext");
    if (position + 1 === projects.length) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };

  const backPosition = () => {
    // setClasses("fadeBack");
    if (position === 0) {
      setPosition(projects.length - 1);
    } else {
      setPosition(position - 1);
    }
  };

  return (
    <Main
      bgClass="bg-yellow-400"
      className=" flex flex-col justify-center items-center relative h-screen80"
    >
      {projects.map((v, i) => (
        <CSSTransition
          in={position === i}
          timeout={1000}
          classNames="slide"
          unmountOnExit
        >
          <Project data={v} />
        </CSSTransition>
      ))}
      <div className="absolute bottom-0 flex justify-center">
        <div onClick={() => backPosition()} className="h-12 cursor-pointer">
          <Arrow3 className="text-yellow-200 h-full w-full transform rotate-180" />
        </div>
        <h2 className="text-yellow-200 font-bold font-hand mx-8">MyProject</h2>
        <div onClick={() => nextPosition()} className="h-12 cursor-pointer">
          <Arrow3 className="text-yellow-200 h-full w-full" />
        </div>
      </div>
    </Main>
  );
}

export function Project({ data }) {
  return (
    <div className="grid grid-cols-2 gap-12 items-center w-4/5 absolute ">
      <div className="col-span-2 md:col-span-1 relative">
        <div className="overflow-hidden rounded-lg">
          <img
            src={data.image}
            alt="profile"
            className="w-full rounded-lg z-20 relative animate-itemLeft show-600 after-100"
          />
        </div>
        <div
          alt="profile"
          className="absolute w-full h-full top-3 left-2 z-10 rounded-lg overflow-hidden"
        >
          <div className="w-full h-full bg-yellow-600 rounded-lg animate-itemLeft show-600" />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="overflow-hidden">
          <h2 className="text-white font-bold animate-itemRight show-400  after-200">
            {data.name}
          </h2>
          <a href={data.url} target="_blank" rel="noreferrer">
            <h4 className="text-yellow-600 animate-itemRight show-500 after-200">
              {data.url}
            </h4>
          </a>
        </div>
        <div className="overflow-hidden mt-3">
          <h5 className="text-white animate-itemRight show-600 after-200">
            {data.desc}
          </h5>
        </div>

        <div className="flex text-yellow-400 animate-scale mt-5 show-200 after-600">
          {data.button?.map((v) => (
            <a
              href={v.url}
              target="_blank"
              rel="noreferrer"
              className="button-primary capitalize mr-2"
            >
              {v.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
Project.defaultProps = {
  data: {},
};

Project.propTypes = {
  data: PropTypes.object,
};
