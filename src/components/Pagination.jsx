import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import DisplayRepo from "./DisplayRepo";
import paginationStyles from "./Pagination.module.css";

export default function Pagination({ data }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={paginationStyles.renderedPageContainer}>
        {currentItems.map((repo) => {
          return (
            <div key={repo.id}>
              <DisplayRepo repo={repo} />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={paginationStyles.pagination}
        pageLinkClassName={paginationStyles.pageLink}
        previousLinkClassName={paginationStyles.pageNum}
        nextLinkClassName={paginationStyles.pageNum}
        activeLinkClassName={paginationStyles.active}
      />
    </>
  );
}
