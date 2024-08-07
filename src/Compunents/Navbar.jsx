// import { button } from "react-router-dom";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
// import { button as Scrollbutton } from "react-scroll";

const Navbar = () => {
  //   const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   const handleLanguageChange = (e) => {
  //     setSelectedLanguage(e.target.value);
  //   };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("Toggle modal");
    setIsModalOpen(!isModalOpen);
  };

  const [isModalSignUp, setIsModalSignUp] = useState(false);

  const SignUpModal = () => {
    // console.log("Toggle modal");
    setIsModalSignUp(!isModalSignUp);
  };

  return (
    <>
      <nav className="  bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src="/logo.png" className="h-8" alt="Flowbite Logo" />

          <button
            onClick={toggleMobileMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border bg-black md:bg-transparent border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                  // aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="#Whoarewe"
                  className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 "
                >
                  Who we are
                </a>
              </li>
              <li>
                <a
                  href="#Services"
                  className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#Blogs"
                  className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500"
                >
                  Latest News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 "
                  onClick={SignUpModal}
                >
                  Sign Up
                </a>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  className="px-[20px] text-theme  py-1 border border-secColor rounded-full bg-secColor  duration-200 "
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isModalOpen && <Login toggle={toggleModal} />}
      {isModalSignUp && <SignUp toggle={SignUpModal} />}
    </>
  );
};

export default Navbar;
