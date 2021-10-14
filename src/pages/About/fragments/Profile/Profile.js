import React from "react";
import PropTypes from "prop-types";
import image from "../../../../assets";
import { CSSTransition } from "react-transition-group";

export default function Profile({ open }) {
  return (
    <CSSTransition in={open} timeout={300} classNames="hide" unmountOnExit>
      <div className="flex transition-all duration-300 flex-col md:flex-row justify-center items-center p-5 md:p-0 md:w-4/5  ">
        <div className="md:mr-10 rounded-2xl overflow-hidden border-4 border-blue-400 w-48 md:w-1/2 mb-8 md:mb-0">
          <img
            src={image.Profile}
            alt="profile"
            className="text-gray-200 w-full"
          />
        </div>
        <div>
          <h2 className="text-blue-400 text-center md:text-left md:leading-3">
            Dimas Angkasa Nurindra
          </h2>
          <h3 className="text-blue-600 font-hand text-center md:text-left">
            Male, 18 Years Old
          </h3>
          <h5 className="text-blue-400 md:text-left text-center my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
            obcaecati labore, provident aperiam excepturi. Facilis odit quae
            maxime minima soluta velit, debitis libero labore, voluptatibus
            quod, ea repellendus esse.
          </h5>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1aF6D8n5Nm4GtpLHz5Hci9aFehTnwXgks/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="button-blue"
            >
              Curriculum vitae
            </a>
          </div>
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
