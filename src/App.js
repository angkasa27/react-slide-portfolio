import React from "react";
import "./tailwind.css";
import "./animation.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Navbar from "./elements/Navbar";
import routes from "./constant/routes";

function App() {
  return (
    <Router>
      <Navbar routes={routes} />
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
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <div className="hidden fixed bottom-0 w-screen md:flex justify-between text-xs py-2 px-10 text-white uppercase opacity-50 tracking-full">
        <p>dimas angkasa nurindra</p>
        <p>© 2021</p>
      </div>
    </Router>
  );
}

export default App;
