import React from "react";

const RedirectToGithubCode = () => {
  window.location.href = "https://www.github.com/githeimer/trackrr";
};

const Navbar = () => {
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
        <img
          src="./code.png"
          onClick={RedirectToGithubCode}
          className=" h-7 cursor-pointer"
          alt="img"
        />
        <img src="./login-avatar.png" className=" h-7" alt="img" />
      </div>
    </div>
  );
};

export default Navbar;
