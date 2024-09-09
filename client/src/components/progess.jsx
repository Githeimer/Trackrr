import React from "react";

const Progess = () => {
  //
  // for debug purpose only
  const handleCell = (e) => {
    console.log("clicked");
    e.target.style.background = "green";
  };

  const days = Number(365);
  const months = 12;

  //actual functional code
  function Cell() {
    return (
      <>
        <div className="timeline-cell" onClick={handleCell}></div>
      </>
    );
  }

  function Weeks({ index }) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <>
        <div className="timeline-weeks-week text-[var(--brand-color)]">
          {daysOfWeek[index]}
        </div>
      </>
    );
  }

  function Months() {
    let month = Array.from(new Array(12));
  }

  function TimeLine() {
    let cells = Array.from(new Array(days));
    let weeks = Array.from(new Array(7));

    return (
      <>
        <div className="timeline">
          <div className="timeline-months"></div>
          <div className="timeline-body">
            <div className="timeline-weeks">
              {weeks.map((_, index) => {
                return <Weeks key={index} index={index}></Weeks>;
              })}
            </div>
            <div className="timeline-cells">
              {cells.map((_, index) => {
                return <Cell key={index}></Cell>;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TimeLine></TimeLine>
    </>
  );
};

export default Progess;
