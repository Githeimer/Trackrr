import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="container items-center justify-center h-[80vh]">
      <img src="./404notfound.png" className="h-96 w-96" alt="404 page" />
      <Link to="/">
        <button className="mt-8 text-[white] font-bold bg-[var(--text-color)] p-3 w-auto rounded-md">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Notfound;
