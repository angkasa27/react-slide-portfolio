import React, { useEffect, useState } from "react";
import Main from "../../elements/Main/Main";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Profile from "./fragments/Profile";
import Achievement from "./fragments/Achievement";
import Skill from "./fragments/Skill";
import { Star1, Star2 } from "../../assets/SVG";

const menus = [
  {
    name: "skill",
    Component: Skill,
    bg: ["bg-red-200", "bg-red-400", "bg-red-600"],
    color: "text-red-400",
  },
  {
    name: "profile",
    Component: Profile,
    className: "my-5 md:my-0",
    bg: ["bg-blue-200", "bg-blue-400", "bg-blue-600"],
    color: "text-blue-400",
  },
  {
    name: "achievement",
    Component: Achievement,
    bg: ["bg-yellow-200", "bg-yellow-400", "bg-yellow-600"],
    color: "text-yellow-400",
  },
];

export default function About() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("");
  const [bg, setBg] = useState("bg-green-400");
  const [opened, setOpened] = useState(false);
  const [closed, setClosed] = useState(true);

  console.log(bg);

  const blob = (
    <>
      <div className="absolute opacity-50 left-1/4 bottom-3/4 w-5">
        <Star1 className="animate-scale show-300 after-1000 w-full" />
      </div>
      <div className="absolute opacity-50 right-1/3 top-16 w-5 ">
        <Star2 className="animate-scale show-300 after-600 w-full" />
      </div>
      <div className="absolute opacity-50 left-1/3 bottom-20 w-5">
        <Star1 className="animate-scale show-300 after-800 w-full" />
      </div>
      <div className="absolute opacity-50 right-1/5 md:top-3/4 top-full w-5 ">
        <Star2 className="animate-scale show-300 after-1200 w-full" />
      </div>
      <div className="absolute opacity-50 left-20 top-1/2 w-5 ">
        <Star2 className="animate-scale show-300 after-400 w-full" />
      </div>
    </>
  );

  return (
    <Main
      bgClass={bg}
      className="flex flex-col md:flex-row md:justify-evenly items-center text-white"
    >
      {blob}
      {menus.map((i, key) => (
        <CSSTransition
          key={key}
          in={open}
          timeout={300}
          classNames={position === i.name ? "window" : "windowHide"}
          onEnter={() => {
            setClosed(false);
            position === i.name && setBg(menus[key].bg[1]);
          }}
          onEntered={() => setOpened(true)}
          onExit={() => {
            setOpened(false);
            setBg("bg-green-400");
          }}
          onExited={() => setClosed(true)}
        >
          <SubMenu
            useOpen={[open, setOpen]}
            usePosition={[position, setPosition]}
            name={i.name}
            className={i.className}
            close={closed}
            opened={opened}
            bg={i.bg}
            color={i.color}
          >
            <i.Component open={position === i.name && opened} />
          </SubMenu>
        </CSSTransition>
      ))}
    </Main>
  );
}

export function SubMenu(props) {
  const {
    children,
    name,
    className,
    useOpen,
    usePosition,
    close,
    opened,
    bg,
    color,
  } = props;
  const [width, setWidth] = useState(" hover:-translate-y-2 cursor-pointer");
  const [height, setHeight] = useState("md:h-72 h-48  ");
  const [ping, setPing] = useState(" hidden");
  const [open, setOpen] = useOpen;
  const [position, setPosition] = usePosition;

  useEffect(() => {
    if (open && position === name) {
      setWidth(" ");
      setHeight("h-screen80 md:mt-screen10");
      setPing(" animate-ping cursor-pointer");
      if (name === "skill") setHeight("h-screen80 mt-screen10");
    } else if (!open) {
      setWidth(" hover:-translate-y-2 cursor-pointer");
      setPing(" hidden");
      setHeight("md:h-72 h-48 ");
    }
    // else if (opened && position !== name) {
    //   setWidth("hidden");
    // }
    else {
      setHeight("md:h-72 h-0 ");
    }
  }, [open, position, name]);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
      setPosition(name);
    } else {
      setOpen(false);
    }
  };

  const card = (
    <>
      <div className="w-full border-b-2 border-white flex justify-between items-center px-2 absolute">
        <h5 className="text-white">{name}</h5>
        <div className="flex justify-end items-center">
          <div className="md:w-3 w-2 md:h-3 h-2 rounded-full bg-white bg-opacity-50" />
          <div className="md:w-3 w-2 md:h-3 h-2 rounded-full bg-white bg-opacity-70 mx-1.5" />
          <div
            className="relative md:w-4 w-3 md:h-4 h-3"
            onClick={() => position === name && open && handleOpen()}
          >
            <div
              className={
                bg[2] +
                " md:w-4 w-3 md:h-4 h-3 rounded-full transition-colors duration-300  absolute -top-0 left-0 z-50 "
              }
            />
            <div
              className={
                bg[2] +
                " md:w-5 w-4 md:h-5 h-4 rounded-full transition-colors duration-300 absolute -top-0.5 -left-0.5 z-50 " +
                ping
              }
            />
          </div>
        </div>
      </div>

      <div className="p-3 pt-8 md:pt-10 h-full z-10 ">
        <div
          className={
            "bg-white rounded-lg h-full w-full flex flex-col justify-center items-center relative"
          }
        >
          <div className="overflow-hidden p-2">
            <CSSTransition
              in={!(!close && position === name)}
              timeout={300}
              classNames="head"
              unmountOnExit
            >
              <h2
                className={
                  "font-hand transition-all duration-300 capitalize " + color
                }
              >
                {name}
              </h2>
            </CSSTransition>
          </div>
          {children}
        </div>
      </div>
    </>
  );

  return (
    <div
      onClick={() => !open && handleOpen()}
      className={
        "w-full transition-all duration-300 transform md:w-72 relative top-0 " +
        width
      }
    >
      <div
        className={
          height +
          " border-2 border-white  rounded-xl relative  transition-all duration-300 animate-scaleUp show-300 after-200 " +
          className +
          " " +
          bg[1]
        }
      >
        {!(opened && position !== name) && card}
      </div>
    </div>
  );
}
SubMenu.defaultProps = {
  children: {},
  useOpen: [],
  usePosition: [],
  name: "",
  bg: "",
  color: "",
  className: "",
  close: true,
  opened: false,
};

SubMenu.propTypes = {
  children: PropTypes.object,
  useOpen: PropTypes.array,
  usePosition: PropTypes.array,
  name: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  close: PropTypes.bool,
  opened: PropTypes.bool,
  className: PropTypes.string,
};
