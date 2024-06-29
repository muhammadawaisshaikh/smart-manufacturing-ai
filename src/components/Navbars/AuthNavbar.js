/*eslint-disable*/
import React from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              alt="Royal Cyber"
              src="https://royal-cyber-ai.vercel.app/images/Royal-Cyber-Logo-white.svg"
              className="w-1/2 align-middle rounded-t-lg"
            />

          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >

          </div>
        </div>
      </nav>
    </>
  );
}
