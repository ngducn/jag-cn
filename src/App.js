import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import MainPage from "./Components/MainPage/index";

import SearchBox from "./Components/SearchBox/index";

const myKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const pageSize = 5;
  const [newsList, setNewsList] = useState([]);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(10);

  useEffect(() => {
    const getData = async () => {
      let url = "https://newsapi.org/v2/top-headlines?country=us";

      if (query) {
        url = "https://newsapi.org/v2/everything?";
      }
      url += `&category=${category}&pageSize=${pageSize}&q=${query}&page=${pageNum}&apiKey=${myKey}`;

      const data = await fetch(url);
      const result = await data.json();
      setNewsList(result.articles);
      setTotalPageNum(Math.ceil(result.totalResults / pageSize));
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    getData();
  }, [category, query, pageNum]);

  const handleCategory = (eventKey, event) => {
    setCategory(eventKey);
  };

  const handleQuery = (searchInput) => {
    setQuery(searchInput);
  };

  return (
    <>
      <SearchBox handleQuery={handleQuery} />
      <MainPage
        data={newsList}
        category={category}
        handleCategory={handleCategory}
        totalPageNum={totalPageNum}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
    </>
  );
};

export default App;
