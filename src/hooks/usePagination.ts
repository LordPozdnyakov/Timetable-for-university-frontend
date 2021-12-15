import { useState } from "react";

export const paginationPageSize = 10;

export const usePagination = () => {
  const [firstPageIndex, setFirstIndex] = useState(0);
  const [lastPageIndex, setLastPageIndex] = useState(paginationPageSize);

  const changePage = (pageNumber: number) => {
    if (pageNumber <= 1) {
      setFirstIndex(0);
      setLastPageIndex(paginationPageSize);
    } else {
      setFirstIndex((pageNumber - 1) * paginationPageSize);
      setLastPageIndex(pageNumber * paginationPageSize);
      window.scrollTo(0, 0);
    }
  };
  return { changePage, firstPageIndex, lastPageIndex };
};
