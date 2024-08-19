import React from "react";

const RedirectToGithubCode = () => {
  window.location.href = "https://www.github.com/githeimer/trackrr";
};
const Login = () => {
  return (
    <div>
      <div className="container login text-[var(--light-color)] items-center justify-center h-[80vh]">
        <div className="bg-[var(--nav-color)] p-3 h-auto flex flex-col gap-2 w-[300px]">
          <h1 className="text-center text-white ">Login with</h1>
          <hr className="border-[var(--text-color)] w-[60%] self-center p-1" />
          <button className="bg-slate-900 p-2">
            {/* google login */}
            <div className="flex flex-row gap-5 justify-center items-center">
              <img src="./google.png" className="logo" alt="" />
              <p className="text-lg">Google</p>
            </div>
          </button>
          {/* github login */}
          <button className="bg-slate-900 p-2">
            <div className="flex flex-row gap-5 justify-center items-center">
              <img src="./github.png" className="logo" alt="" />
              <p className="text-lg">Github</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
