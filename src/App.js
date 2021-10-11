import React from "react";
import "./tailwind.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
    prop: { exact: true },
    transition: {
      enter: "enter-bottom z-20",
      enterActive: "enter-bottom-done z-20",
    },
  },
  {
    path: "/project",
    name: "Project",
    Component: Project,
    transition: {
      enter: "enter-top z-20",
      enterActive: "enter-bottom-done z-20",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    Component: Contact,
    transition: {
      enter: "enter-left z-20",
      enterActive: "enter-bottom-done z-20",
    },
  },
];

function App() {
  return (
    <Router>
      <Nav />
      {routes.map((route) => (
        <Route path={route.path} {...route.prop}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames={{ ...route.transition }}
              unmountOnExit
            >
              <route.Component />
            </CSSTransition>
          )}
        </Route>
      ))}
    </Router>
  );
}

export default App;

export function Home() {
  return (
    <section className=" bg-blue-500 fixed top-0 left-0">
      <h1 className="text-5xl">Home</h1>
    </section>
  );
}

export function Project() {
  return (
    <section className=" bg-green-500 fixed top-0 left-0">
      <h1 className="text-5xl">Project</h1>
    </section>
  );
}

export function Contact() {
  return (
    <section className=" bg-red-500 fixed top-0 left-0">
      <h1 className="text-5xl">Contact</h1>
    </section>
  );
}

export function Nav() {
  return (
    <nav className="fixed w-screen px-10 py-5 z-50">
      <ul className="flex justify-between">
        {routes.map((route) => (
          <li>
            <NavLink
              activeClassName="text-xl"
              to={route.path}
              key={route.path}
              exact
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
