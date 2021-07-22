import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationItem = ({ setCurrentPage, currentPage, totalPage }) => {
  const handleFirst = () => {
    setCurrentPage(1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNumber = (value) => {
    setCurrentPage(value);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleLast = () => {
    setCurrentPage(totalPage);
  };

  return (
    <Pagination>
      <Pagination.First disabled={currentPage === 1} onClick={handleFirst} />
      <Pagination.Prev disabled={currentPage === 1} onClick={handlePrev} />
      <Pagination.Item
        active={currentPage === 1}
        onClick={() => handleNumber(1)}
      >
        {1}
      </Pagination.Item>

      {currentPage > 2 && <Pagination.Ellipsis />}
      {currentPage > 1 && currentPage < totalPage && (
        <Pagination.Item active>{currentPage}</Pagination.Item>
      )}

      {totalPage > currentPage + 1 && <Pagination.Ellipsis />}

      {totalPage > 1 && (
        <Pagination.Item onClick={() => handleNumber(totalPage)}>
          {totalPage}
        </Pagination.Item>
      )}

      <Pagination.Next
        disabled={currentPage === totalPage}
        onClick={handleNext}
      />
      <Pagination.Last
        disabled={currentPage === totalPage}
        onClick={handleLast}
      />
    </Pagination>
  );
};

export default PaginationItem;
