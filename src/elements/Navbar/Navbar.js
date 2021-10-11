import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Logo } from "../../assets/SVG";

export default function Navbar(props) {
  const location = useLocation();
  const { routes } = props;

  return (
    <nav className="fixed w-screen px-10 py-5 z-50 text-white">
      <div className="flex justify-between">
        <NavLink
          to="/"
          className="transform transition-all duration-300 hover:rotate-12"
        >
          <Logo className="w-12 h-12 " />
        </NavLink>
        <ul className="flex font-nunito">
          {routes.map((route) => (
            <li>
              <NavLink
                activeClassName="opacity-100"
                to={route.path}
                key={route.path}
                className="text-lg m-3 font-semibold tracking-wide flex flex-col items-center transform hover:scale-110 hover:rotate-3 main-hover"
              >
                {route.name}
                {location.pathname === route.path && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  routes: [],
};

Navbar.propTypes = {
  routes: PropTypes.array,
};
