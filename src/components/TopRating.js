import React from "react";

const users = [
  {
    picture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Norman Guerrero",
    rating: "100",
    percentage: "100%",
  },
  {
    picture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Darrell Rios",
    rating: "99.43",
    percentage: "99,43%",
  },
  {
    picture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Margaret Day",
    rating: "96.9",
    percentage: "96,9%",
  },
  {
    picture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Helena Watts",
    rating: "88",
    percentage: "88%",
  },
  {
    picture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Billy powell",
    rating: "87.45",
    percentage: "87,45%",
  },
];

const TopRating = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-blue-400 text-xl font-extrabold mb-2">
          Top ranking
        </h1>
        {users.map((user) => (
          <div className="flex flex-row p-2 border-b-[1px] mr-2">
            <div>
              <img
                src={user.picture}
                alt="user profile"
                style={{ height: "50px", width: "50px" }}
                className=" rounded-[50%] mr-3"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-blue-600 text-base">{user.name}</p>
              <p className="ml-3 font-light">{user.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRating;
