import React from "react";

const RecentPosts = () => {
  return (
    <>
      <h1 className=" text-blue-400 font-bold text-5xl m-5">Recent Posts</h1>
      <div className="container mx-auto px-5 py-2">
        <div className=" flex flex-wrap">
          <div className="flex w-2/3 flex-wrap">
            <div className="p-1 w-full relative text-center">
              <img
                className="block h-full w-full rounded-lg object-cover object-center blur-[1px]"
                src="https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_640.jpg"
                alt="gallery"
              />
              <div className=" absolute bottom-[8px] left-[16px] text-left text-white p-1">
                <span className="font-bold text-5xl">
                  Big banks to get reprieve from crisis-era volcker rule
                </span>
                <br></br>
                <div className="flex flex-row items-center">
                  <span className="text-md ml-3">Dan Howell</span>
                  <span className="ml-auto mr-2 text-xs">99,7%</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-1 relative text-center">
              <img
                className="block h-full w-full rounded-lg object-cover object-center blur-[1px]"
                src="https://cdn.pixabay.com/photo/2016/11/29/02/56/blonde-1866951_640.jpg"
                alt="gallery"
              />
              <div className=" absolute bottom-[8px] left-[16px] text-left text-white p-1">
                <span className="font-bold text-xl">
                  Mom-Coms Latch On to the Raw Reality of New Motherhood
                </span>
                <br></br>
                <div className="flex flex-row items-center">
                  <span className="text-md ml-3">Charlie Bell</span>
                  <span className="ml-auto mr-2 text-xs">99,7%</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-1 relative text-center">
              <img
                className="block h-full w-full rounded-lg object-cover object-center blur-[1px]"
                src="https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_640.jpg"
                alt="gallery"
              />
              <div className=" absolute bottom-[8px] left-[16px] text-left text-white p-1">
                <span className="font-bold text-xl">
                  Why you sholud stop being so hard on yourself?
                </span>
                <br></br>
                <div className="flex flex-row items-center">
                  <span className="text-md ml-3">Craig Estrade</span>
                  <span className="ml-auto mr-2 text-xs">99,7%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="h-1/2 p-1 relative text-center">
              <img
                className="block h-full w-full rounded-lg object-cover object-center blur-[1px]"
                src="https://cdn.pixabay.com/photo/2020/02/20/19/48/travel-4865665_640.jpg"
                alt="gallery"
              />
              <div className=" absolute bottom-[8px] left-[16px] text-left text-white p-1">
                <span className="font-bold text-2xl">
                  How a pentagon deal became a identity crisis for Google
                </span>
                <br></br>
                <div className="flex flex-row items-center">
                  <span className="text-md ml-3">Landon Gregory</span>
                  <span className="ml-auto mr-2 text-xs">99,7%</span>
                </div>
              </div>
            </div>
            <div className="h-1/2 p-1 relative text-center">
              <img
                className="block h-full w-full rounded-lg object-cover object-center blur-[1px]"
                src="https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352_640.jpg"
                alt="gallery"
              />
              <div className=" absolute bottom-[8px] left-[16px] text-left text-white p-1">
                <span className="font-bold text-2xl">
                  Pusha-T, a lecturer seeking a target, Finds one
                </span>
                <br></br>
                <div className="flex flex-row items-center">
                  <span className="text-md ml-3">Henry Larson</span>
                  <span className="ml-auto mr-2 text-xs">99,1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
