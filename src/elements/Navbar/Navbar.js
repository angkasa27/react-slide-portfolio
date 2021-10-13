import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Arrow1, Arrow2, Logo } from "../../assets/SVG";

export default function Navbar(props) {
  const { pathname } = useLocation();
  const { routes } = props;

  return (
    <nav className="fixed w-screen px-10 py-2 md:py-5 z-50 text-white">
      {pathname === "/home" && (
        <>
          <div className="absolute top-20 right-36  transform rotate-6 opacity-50 hidden md:block">
            <Arrow1 className="animate-scale show-300 after-2500" />
          </div>

          <div className="absolute top-20 right-1/3  transform -rotate-6 opacity-50 md:hidden">
            <Arrow2 className="animate-scale show-300 after-2500 h-24" />
          </div>
        </>
      )}

      <div className="flex justify-center md:justify-between">
        <NavLink
          to="/"
          className="transform transition-all duration-300 hover:rotate-12 hidden md:block"
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
                className="transition-all duration-300 opacity-70 hover:opacity-100 text-lg m-3 font-semibold tracking-wide flex flex-col items-center transform hover:scale-110 hover:rotate-3 "
              >
                {route.name}
                {pathname === route.path && (
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
