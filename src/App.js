import React, { useEffect, useState } from "react";

import NewsList from "./Components/NewsList";
import PaginationItem from "./Components/Pagination";

import SearchBox from "./Components/SearchBox/index";
import SideMenu from "./Components/SideMenu";

const myKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCatgory] = useState("");

  useEffect(() => {
    let pageLimit = 5;
    const getData = async () => {
      let baseUrl = "https://nesssssswsapi.org/v2";
      let withQuery = `/everything?q=${query}`;
      let noQuery = "/top-headlines?country=us";
      let lastPart = `&apiKey=${myKey}`;
      let fixedPart = `&page=${currentPage}&pageSize=${pageLimit}`;
      let categoryPart = "&category=business";
      let url = baseUrl + noQuery + fixedPart + lastPart;

      if (query) {
        url = baseUrl + withQuery + fixedPart + lastPart;
      } else if (category) {
        url = baseUrl + noQuery + categoryPart + fixedPart + lastPart;
      }

      try {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result);
        setTotalPage(Math.ceil(result.totalResults / pageLimit));
        setData(result);
      } catch (error) {
        // console.log("e");
        setData({ articles: [{ title: "ahhi", description: "not borkne" }] });
      }
    };
    getData();
  }, [currentPage, query, category]);

  return (
    <>
      <SearchBox setQuery={setQuery} />
      <SideMenu setCategory={setCatgory} />
      <PaginationItem
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
      <NewsList data={data} category={category} />
    </>
  );
};

export default App;
