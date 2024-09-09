import React from "react";
import { Ripple, Tooltip, initTWE } from "tw-elements";

const RedirectToGithubCode = () => {
  window.location.href = "https://www.github.com/githeimer/trackrr";
};

const Navbar = () => {
  initTWE({ Ripple, Tooltip });
  return (
    <div className="flex flex-row items-center justify-between mt-3 p-2 rounded-xl bg-[var(--nav-color)]">
      {/* left divison */}
      <div className="flex flex-row gap-3 items-center align-center">
        <img src="./TR.jpg" className="h-10 rounded-lg" alt="" />
        <h1 className="text-white text-3xl font-bold">
          Trackrr<span className="text-[var(--text-color)] ">.</span>
        </h1>
      </div>
      {/* right divison */}
      <div className="flex flex-row gap-4 items-center align-center">
        {/* github redirect */}
        <img
          src="./code.png"
          onClick={RedirectToGithubCode}
          className=" h-7 cursor-pointer"
          alt="img"
          data-twe-toggle="tooltip"
          data-twe-placement="bottom"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          title="Github Code"
        />

        <img src="./login-avatar.png" className=" h-7" alt="img" />
      </div>
    </div>
  );
};

export default Navbar;
