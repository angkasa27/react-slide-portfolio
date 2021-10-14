import React, { useState } from "react";
import Main from "../../elements/Main/Main";
import { Arrow3, Star1, Star2 } from "../../assets/SVG";
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

  const blob = (
    <>
      <div className="absolute opacity-50 right-1/4 bottom-3/4 w-5">
        <Star1 className="animate-scale show-300 after-1000 w-full" />
      </div>
      <div className="absolute opacity-50 left-1/3 top-16 w-5 ">
        <Star2 className="animate-scale show-300 after-600 w-full" />
      </div>
      <div className="absolute opacity-50 right-1/3 bottom-20 w-5">
        <Star1 className="animate-scale show-300 after-800 w-full" />
      </div>
      <div className="absolute opacity-50 left-1/5 md:top-3/4 top-full w-5 ">
        <Star2 className="animate-scale show-300 after-1200 w-full" />
      </div>
      <div className="absolute opacity-50 right-20 top-1/2 w-5 ">
        <Star2 className="animate-scale show-300 after-400 w-full" />
      </div>
    </>
  );

  return (
    <Main
      bgClass="bg-yellow-400"
      className=" flex flex-col justify-start md:justify-center items-center relative h-screen80 text-white"
    >
      {blob}
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
    <div className="grid grid-cols-2 gap-12 items-center w-4/5 absolute  mt-screen10 md:mt-0">
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
