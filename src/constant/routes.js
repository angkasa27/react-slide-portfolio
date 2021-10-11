import { Home, About, Project, Skill } from "../pages";

const routes = [
  {
    path: "/home",
    name: "Home",
    Component: Home,
    // prop: { exact: true },
    transition: {
      enter: "enter-bottom z-20",
      enterActive: "enter-done z-20",
    },
  },
  {
    path: "/about",
    name: "About",
    Component: About,
    transition: {
      enter: "enter-top z-20",
      enterActive: "enter-done z-20",
    },
  },
  {
    path: "/skill",
    name: "Skill",
    Component: Skill,
    transition: {
      enter: "enter-right z-20",
      enterActive: "enter-done z-20",
    },
  },
  {
    path: "/project",
    name: "Project",
    Component: Project,
    transition: {
      enter: "enter-left z-20",
      enterActive: "enter-done z-20",
    },
  },
];

export default routes;
