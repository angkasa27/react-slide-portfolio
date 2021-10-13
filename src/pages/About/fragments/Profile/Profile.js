import React from "react";
import PropTypes from "prop-types";
import image from "../../../../assets";
import { CSSTransition } from "react-transition-group";

export default function Profile({ open }) {
  return (
    <CSSTransition in={open} timeout={300} classNames="hide" unmountOnExit>
      <div className="flex transition-all duration-300 flex-col md:flex-row justify-center items-center p-5 md:p-0 md:w-4/5  ">
        <div className="md:mr-10 rounded-2xl overflow-hidden border-4 border-purple2 w-48 md:w-1/2 mb-8 md:mb-0">
          <img
            src={image.Profile}
            alt="profile"
            className="text-gray-200 w-full"
          />
        </div>
        <div>
          <h2 className="text-purple2 text-center md:text-left leading-3">
            Dimas Angkasa N
          </h2>
          <h3 className="text-purple2-dark font-hand">Male, 18 Years Old</h3>
          <h5 className="text-purple2-dark md:text-left text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
            obcaecati labore, provident aperiam excepturi. Facilis odit quae
            maxime minima soluta velit, debitis libero labore, voluptatibus
            quod, ea repellendus esse.
          </h5>
        </div>
      </div>
    </CSSTransition>
  );
}

Profile.defaultProps = {
  open: false,
};

Profile.propTypes = {
  open: PropTypes.bool,
};
