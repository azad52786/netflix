import React, { useEffect, useState } from "react";
import { LOGO } from "../utils/constant";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, isActive } from "react-router-dom";
import { USER_AVTER } from "../utils/constant";
import { auth } from "../Firebase auth/Firebse";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { removeAllMovieSlice } from "../utils/moviesSlice";
import { removeWholeMovieTabSlice } from "../utils/movieTabSlice";
import { removeWholeNewMovieSlice } from "../utils/newmovieSlice";
import { removeAllTrailerSlice } from "../utils/trailerSlice";
import { removeAllTvShowSlice } from "../utils/tvShowSlice";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signOutContainer, setSignOutContainer] = useState(false);
  const [backgound, setBackground] = useState(false);
  const user = useSelector((store) => store?.user);

  useEffect(() => {
    let header = document.querySelector("#header");
    window.addEventListener("scroll", function () {
      if (user) setBackground(true);
      else setBackground(false);
      if (backgound && window.scrollY > 120) {
        header.classList.add("bg-black");
      } else {
        header.classList.remove("bg-black");
      }
    });
    
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [user, backgound]);
  
  const SignOutHandeler = () => {
    signOut(auth)
      .then(() => {
        setSignOutContainer(false);
        dispatch(removeAllMovieSlice());
        dispatch(removeWholeMovieTabSlice());
        dispatch(removeWholeNewMovieSlice());
        dispatch(removeAllTrailerSlice());
        dispatch(removeAllTvShowSlice());

        toast.success("Sign Out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div
      className="fixed w-full bg-gradient-to-b from-black h-24 sm:h-20  flex justify-between z-50 bg-opacity-70"
      id="header"
    >
      <img
        src={LOGO}
        alt="logo"
        className=" sm:h-20 h-16 z-10 ml-5 cursor-pointer"
        onClick={!user ? () => navigate("/") : () => navigate("/home")}
      />

      {user && (
        <div className=" absolute w-screen sm:w-fit sm:sticky top-8 -left-8 ml-[10%] sm:ml-0 text-sm">
          <ul className=" flex justify-center sm:justify-around items-center text-white gap-x-8 sm:gap-5 mt-7 text-sm">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? `bg-slate-400 opacity-50 rounded-full px-3 py-2 text-gray-800 font-bold`
                    : ``
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvshow"
                className={({ isActive }) =>
                  isActive
                    ? `bg-slate-500 opacity-60 rounded-full px-3 py-2 text-gray-800 font-bold`
                    : ``
                }
              >
                TV Show
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  isActive
                    ? `bg-slate-500 opacity-60 rounded-full px-3 py-2 text-gray-800 font-bold`
                    : ``
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newandpopuler"
                className={({ isActive }) =>
                  isActive
                    ? `bg-slate-500 opacity-60 rounded-full px-3 py-2 text-gray-800 font-bold`
                    : ``
                }
              >
                New & Popular
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {user && (
        <div className=" relative flex gap-x-6 text-lg h-fit">
          <div className=" flex gap-x-2 hover:brightness-75 cursor-pointer text-white sm:mt-6 mt-4 "
            onClick={() => navigate("/search")}
          >
          <FaSearch className=" w-4 h-4 mt-1"/>
          Search
          </div>
          <img
            alt="user_Profile"
            src={USER_AVTER}
            className=" mr-9 sm:w-9 sm:h-9 h-6 w-7 sm:mt-7 mt-5 aspect-square cursor-pointer"
            onClick={() => setSignOutContainer(!signOutContainer)}
          />
          {signOutContainer && (
            <div
              className=" absolute top-10 sm:top-16  flex flex-col justify-between gap-y-3 bg-black opacity-90 p-3  text-white
                       sm:text-sm  text-opacity-75 sm:min-w-[132px] min-w-[95%] rounded-md right-6 mt-1
                     "
            >
              <Link to="/home">
                <div className=" flex ">
                  <div className=" bg-green-600 w-5 h-5 mr-1"></div>
                  <p>{user?.displayName}</p>
                </div>
              </Link>
              <Link to="/home">
                <div className=" flex">
                  <div className=" bg-blue-500 w-5 h-5 mr-1"></div>
                  <p>NooB aCc</p>
                </div>
              </Link>
              <Link to="/home">
                <div className=" flex">
                  <div className=" bg-slate-500 w-5 h-5 mr-1"></div>
                  <p>Private</p>
                </div>
              </Link>

              <div className=" h-[1px] w-full  bg-white"></div>

              <button className=" text-white text-sm" onClick={SignOutHandeler}>
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
      {!user && (
        <button
          className=" h-9 py-1 px-6 mt-7 mr-7 bg-red-600 rounded-sm text-white font-bold"
          onClick={() => navigate("/Login")}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;
