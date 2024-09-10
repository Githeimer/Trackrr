import React from "react";

const Progess = ({ name, preference }) => {
  //
  // for debug purpose only

  // should change later
  // const preferenceColor = ["black", "green", "blue", "pink"];
  const handleCell = (e) => {
    console.log("clicked");

    e.target.style.background = preference;
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

    const shouldShowDay = index === 1 || index === 3 || index === 5;

    return (
      <>
        <div className="timeline-weeks-week">
          {shouldShowDay ? (
            daysOfWeek[index]
          ) : (
            <div style={{ visibility: "hidden" }}>{daysOfWeek[index]}</div>
          )}
        </div>
      </>
    );
  }

  function Months({ index }) {
    const MonthsName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return <div className="timeline-month text-white">{MonthsName[index]}</div>;
  }

  function TimeLine() {
    let cells = Array.from(new Array(days));
    let weeks = Array.from(new Array(7));
    let month = Array.from(new Array(12));

    return (
      <>
        <div className="timeline">
          <div className="timeline-months">
            {month.map((_, index) => {
              return <Months index={index}></Months>;
            })}
          </div>
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
      <div className="timeline-container flex flex-col gap-2  w-fit" draggable>
        <div className="timeline-title">
          <h1 className="text-white text-2xl self-start">{name} Tracker</h1>
          <img
            src="./dragicon.png"
            alt="Draggable-icon"
            className="timeline-title-icon"
          />
        </div>

        <TimeLine></TimeLine>
      </div>
    </>
  );
};

export default Progess;
