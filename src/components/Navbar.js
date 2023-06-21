import React from "react";
import { CiMenuBurger, CiSearch, CiBellOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row text-xl items-center p-3">
        <div>
          <CiMenuBurger />
        </div>
        <div className="ml-auto">
          <img
            src={process.env.PUBLIC_URL + "/images/news.png"}
            alt="news logo"
            style={{ height: "30px", width: "70px" }}
          />
        </div>
        <div className="flex flex-row ml-auto items-center gap-2">
          <CiSearch />
          <CiBellOn />
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile"
            style={{ height: "30px", width: "30px" }}
            className=" rounded-[50%]"
          />
        </div>
      </div>
      <div className="p-2">
        <ul className="flex flex-row gap-10 text-lg ml-4">
          <Link to="/">
            <li className="hover-underline-animation">Recent Posts</li>
          </Link>
          <Link to="/popular">
            <li className="hover-underline-animation">Popular</li>
          </Link>
          <Link to="/politics">
            <li className="hover-underline-animation">Politics</li>
          </Link>
          <Link to="/media">
            <li className="hover-underline-animation">Media</li>
          </Link>
          <Link to="/tech">
            <li className="hover-underline-animation">Tech</li>
          </Link>
          <Link to="/science">
            <li className="hover-underline-animation">Science</li>
          </Link>
          <Link to="/work">
            <li className="hover-underline-animation">Work</li>
          </Link>
          <Link to="/sport">
            <li className="hover-underline-animation">Sport</li>
          </Link>
          <Link to="/more">
            <li className="hover-underline-animation">More</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
