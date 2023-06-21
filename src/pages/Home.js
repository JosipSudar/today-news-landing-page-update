import React from "react";
import RecentPosts from "./RecentPosts";
import TopRating from "../components/TopRating";
import MostDiscussed from "../components/MostDiscussed";

const Home = () => {
  return (
    <div className="flex flex-row">
      <div className="w-2/3">
        <RecentPosts />
      </div>
      <div className="w-1/3 ml-2">
        <div className="h-1/2">
          <TopRating />
        </div>
        <div className=" h-1/2">
          <MostDiscussed />
        </div>
      </div>
    </div>
  );
};

export default Home;
