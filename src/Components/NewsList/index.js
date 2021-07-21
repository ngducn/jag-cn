import React from "react";
import SingleNews from "../SingleNews/index";
const NewsList = ({ data, category }) => {
  return (
    <>
      <h1> Current category {category}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {data &&
          data.map((el, idx) => <SingleNews key={idx} singleData={el} />)}
      </div>
    </>
  );
};

export default NewsList;
