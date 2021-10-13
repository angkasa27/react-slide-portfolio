import React, { useState } from "react";
import PropTypes from "prop-types";
import { Arrow3 } from "../../../../assets/SVG";
import { CSSTransition } from "react-transition-group";

const awards = [
  {
    name: "HIEDESCOM 2K19",
    rank: "1st Place",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id obcaecati labore, provident aperiam excepturi. Facilis odit quaemaxime minima soluta velit, debitis libero labore, voluptatibus quod, ea repellendus esse.",
    project: "/",
    certificate: "/",
  },
  {
    name: "UNIPRO STAGE 5",
    rank: "1st Place",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id obcaecati labore, provident aperiam excepturi. Facilis odit quaemaxime minima soluta velit, debitis libero labore, voluptatibus quod, ea repellendus esse.",
    project: "/",
    certificate: "/",
  },
  {
    name: "WDC ASIA 2K20",
    rank: "1st Place",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id obcaecati labore, provident aperiam excepturi. Facilis odit quaemaxime minima soluta velit, debitis libero labore, voluptatibus quod, ea repellendus esse.",
    project: "/",
    certificate: "/",
  },
  {
    name: "HIEDESCOM 2K20",
    rank: "1st Place",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id obcaecati labore, provident aperiam excepturi. Facilis odit quaemaxime minima soluta velit, debitis libero labore, voluptatibus quod, ea repellendus esse.",
    project: "/",
    certificate: "/",
  },
];

export default function Achievement({ open }) {
  const [position, setPosition] = useState(0);
  const [classes, setClasses] = useState("fadeBack");

  const nextPosition = () => {
    setClasses("fadeNext");
    if (position + 1 === awards.length) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };

  const backPosition = () => {
    setClasses("fadeBack");
    if (position === 0) {
      setPosition(awards.length - 1);
    } else {
      setPosition(position - 1);
    }
  };

  return (
    <CSSTransition in={open} timeout={300} classNames="show" unmountOnExit>
      <div className="transition-all duration-300 flex flex-col md:flex-row justify-evenly items-center w-full h-full p-5 ">
        <div
          onClick={() => backPosition()}
          className="cursor-pointer z-20 md:block hidden transform hover:-rotate-12 transition-all duration-300"
        >
          <Arrow3 className="w-12 h-12 transform rotate-180" />
        </div>
        <div className="md:w-3/5 w-4/5">
          {awards.map((award, i) => (
            <CSSTransition
              in={i === position}
              timeout={500}
              classNames={classes}
              unmountOnExit
            >
              <Item data={award} />
            </CSSTransition>
          ))}
        </div>
        <div className="flex justify-between fixed bottom-12 md:hidden">
          <div
            onClick={() => backPosition()}
            className="cursor-pointer z-20 mr-8"
          >
            <Arrow3 className="w-12 h-12 transform rotate-180 " />
          </div>
          <div
            onClick={() => nextPosition()}
            className="cursor-pointer z-20 ml-8"
          >
            <Arrow3 className="w-12 h-12" />
          </div>
        </div>

        <div
          onClick={() => nextPosition()}
          className="cursor-pointer z-20 md:block hidden transform hover:-rotate-12 transition-all duration-300"
        >
          <Arrow3 className="w-12 h-12" />
        </div>
      </div>
    </CSSTransition>
  );
}

Achievement.defaultProps = {
  open: false,
};

Achievement.propTypes = {
  open: PropTypes.bool,
};

export function Item({ data }) {
  return (
    <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-yellow-400 md:leading-3 bg-red text-center">
        {data.name}
      </h2>
      <h2 className="text-yellow-600 font-hand text-center">{data.rank}</h2>
      <h5 className="text-yellow-400 text-center mt-5">{data.desc}</h5>
      <div className="flex text-white">
        <a
          href={data.project}
          target="_blank"
          rel="noreferrer"
          className="button-yellow mt-5 mr-5 "
        >
          Project
        </a>
        <a
          href={data.certificate}
          target="_blank"
          rel="noreferrer"
          className="button-yellow mt-5 "
        >
          Certificate
        </a>
      </div>
    </div>
  );
}
Item.defaultProps = {
  data: {},
  active: false,
};

Item.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool,
};
