import React from "react";

const articles = [
  {
    name: "Bad Blood",
    rating: "99,7%",
    text: "Joe Bryan probably didn't kill his wife. But he's behind bars for her murder...",
    author: "by Stanley Hunt",
  },
  {
    name: "Trump Against the Tide",
    rating: "99,7%",
    text: "The president is pushing to bring America's educational project to a halt, but it won't be easy.",
    author: "by Curtis Brown",
  },
  {
    name: "Right About Roseanne",
    rating: "99,7%",
    text: "Roseanne Barr's tweet about Jarret wasn't the odd needle in the haystack. It was the last straw.",
    author: "by Andy Clark",
  },
];

const MostDiscussed = () => {
  return (
    <div className="container">
      <h1 className="text-blue-400 text-xl font-extrabold mb-3">
        Most Discussed
      </h1>
      {articles.map((article) => (
        <div className="flex flex-col mb-5">
          <div className="flex flex-row gap-2">
            <p className="text-blue-800 text-lg">{article.name}</p>
            <span className="text-blue-300">{article.rating}</span>
          </div>
          <p className="text-lg mr-2">{article.text}</p>
          <p className=" text-xs mt-1">{article.author}</p>
        </div>
      ))}
    </div>
  );
};

export default MostDiscussed;
