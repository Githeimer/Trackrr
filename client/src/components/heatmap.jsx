import React from "react";

const Heatmap = ({ preference, name }) => {
  const months = Array.from(new Array(12)); // 12 months
  const weeks = Array.from(new Array(7)); // 7 days in a week

  

  const Cells = ({ days ,value,year,intensity}) => {
    const handleCell = (e) => {
      console.log("clicked");
     let intensityIndex=0;
      const intensityMap=["transparent","#98FB98","#0BDA51","#7CFC00"];
      if(intensity>0 && intensity<=2)
      {
        intensityIndex=1;
      }
      else if(intensity>2 && intensity<=3)
      {
        intensityIndex=2;
      }
      else
      {
        intensityIndex=3;
      }
      e.target.style.background=intensityMap[intensityIndex];

     
    };
    return <div className="timeline-cell" onClick={handleCell}></div>;
  };

  const ExtraCells = () => {
    return <div className="timeline-cell bg-transparent"></div>;
  };

  const Month = ({ month_index }) => {
    const currentYear= new Date().getFullYear();
    
    const daysInMonth = new Date(currentYear, month_index + 1, 0).getDate(); // Number of days in the month
    const startOfMonth = new Date(currentYear, month_index, 1).getDay(); // Day of the week the month starts on

    // Calculate extra cells
    const extraCells = Array.from(new Array(startOfMonth));
    // Array for actual days
    const days = Array.from(new Array(daysInMonth));

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

   

    return (
      <div className="timeline-cells">
        {/* Render extra cells */}
        {extraCells.map((_, index) => (
          <ExtraCells key={`extra-${index}`} />
        ))}
        {/* Render actual days */}
        {days.map((_, index) => (
          <Cells key={`day-${index}`} days={index} value={MonthsName[month_index]} year={currentYear} intensity={4} />
        ))}
      </div>
    );
  };

  const Weeks = ({ index }) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const shouldShowDay = index === 1 || index === 3 || index === 5;

    return (
      <div className="timeline-week">
        {shouldShowDay ? (
          daysOfWeek[index]
        ) : (
          <div style={{ visibility: "hidden" }}>{daysOfWeek[index]}</div>
        )}
      </div>
    );
  };

  const Timeline = () => {
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

    return (
      <div className="timeline-months">
        {months.map((_, index) => (
          <div className="timeline-month">
            <h1>{MonthsName[index]}</h1>
            <Month month_index={index} key={index} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="timeline-wrap" draggable>
      <div className="timeline-title">
        <h1 className="text-white text-2xl self-start">{name} Tracker</h1>
        <img
          src="./dragicon.png"
          alt="Draggable-icon"
          className="timeline-title-icon"
        />
      </div>
      <div className="timeline">
        <div className="timeline-weeks-container">
          {/* Random text but invisible */}
          <div className="timeline-blank">rnd</div>

          <div className="timeline-weeks">
            {weeks.map((_, index) => (
              <Weeks key={index} index={index} />
            ))}
          </div>
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default Heatmap;
