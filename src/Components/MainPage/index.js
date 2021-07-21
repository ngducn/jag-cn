import React from "react";
import { Col, Row } from "react-bootstrap";
import NewsList from "../NewsList/index";
import PaginationBar from "../Pagination";
import SideMenu from "../SideMenu/index";

const MainPage = ({
  data,
  category,
  handleCategory,
  totalPageNum,
  setPageNum,
  pageNum,
}) => {
  return (
    <>
      <Row>
        <Col xs={12} md={3} lg={3}>
          <SideMenu handleCategory={handleCategory} />
        </Col>
        <Col xs={12} md={7} lg={7}>
          <NewsList data={data} category={category} />
        </Col>
      </Row>
      <PaginationBar
        totalPageNum={totalPageNum}
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
    </>
  );
};

export default MainPage;
