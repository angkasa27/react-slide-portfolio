import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

export default function Skill({ open }) {
  return (
    <CSSTransition in={open} timeout={300} classNames="hide" unmountOnExit>
      <div className="transition-all duration-300 flex flex-col justify-center items-center p-10 ">
        <h4 className="text-purple2-dark">Mantap</h4>
        <p className="text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
          obcaecati labore, provident aperiam excepturi. Facilis odit quae
          maxime minima soluta velit, debitis libero labore, voluptatibus quod,
          ea repellendus esse.
        </p>
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
