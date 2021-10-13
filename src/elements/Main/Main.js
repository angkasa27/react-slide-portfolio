import React from "react";
import PropTypes from "prop-types";

export default function Main({ children, bgClass, className }) {
  return (
    <section
      className={
        "no-select font-fira font-normal w-screen min-h-screen flex justify-center items-center fixed top-0 left-0 " +
        bgClass
      }
    >
      <div className={"main " + className}>{children}</div>
    </section>
  );
}

Main.defaultProps = {
  children: {},
  bgClass: "",
  className: "",
};

Main.propTypes = {
  children: PropTypes.object,
  bgClass: PropTypes.string,
  className: PropTypes.string,
};
