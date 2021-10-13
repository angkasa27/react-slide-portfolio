import React from "react";
import Main from "../../elements/Main/Main";

export default function Project() {
  return (
    <Main
      bgClass="bg-orange2"
      className="flex items-center justify-between flex-col md:flex-row"
    >
      <div className="overflow-hidden ">
        <h2 className="text-white font-bold animate-itemRight show-300 after-300">
          This is
        </h2>
        <h2 className="text-orange2-dark font-bold font-hand pr-2 pb-12 animate-itemUpFar show-300 after-600 leading-5">
          myProjects
        </h2>
      </div>
    </Main>
  );
}
