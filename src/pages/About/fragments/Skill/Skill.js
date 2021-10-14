import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

export default function Skill({ open }) {
  return (
    <CSSTransition in={open} timeout={300} classNames="hide" unmountOnExit>
      <div className="transition-all duration-300 flex flex-col justify-center items-center">
        <div>
          <h2 className="text-red-400">This is</h2>
          <h1 className="text-red-600 font-hand leading-4 mb-14">mySkills</h1>
        </div>
        <h4 className="text-red-400 italic">-Sorry, still on develop-</h4>
      </div>
    </CSSTransition>
  );
}

Skill.defaultProps = {
  open: false,
};

Skill.propTypes = {
  open: PropTypes.bool,
};
