import React from "react";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  const maxPagesToShow = 3; // Number of page numbers to show

  // Calculate the range of page numbers to display
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Adjust the start page if we are near the end of the total pages
  if (endPage - startPage < maxPagesToShow - 1) {
    const newStartPage = Math.max(1, endPage - maxPagesToShow + 1);
    pageNumbers.push(
      ...Array.from(
        { length: endPage - newStartPage + 1 },
        (_, i) => newStartPage + i
      )
    );
  } else {
    pageNumbers.push(
      ...Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      )
    );
  }

  return (
    <div className="row">
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-center w-100">
        <div id="kt_table_users_paginate">
          <ul className="pagination">
            <li className={clsx("page-item", { disabled: currentPage === 1 })}>
              <a
                onClick={() => onPageChange(1)}
                className="page-link"
                style={{
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                First
              </a>
            </li>
            <li className={clsx("page-item", { disabled: currentPage === 1 })}>
              <a
                onClick={() => onPageChange(currentPage - 1)}
                className="page-link"
                style={{
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                Previous
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={clsx("page-item", {
                  active: number === currentPage,
                  disabled: currentPage === number,
                })}
              >
                <a
                  onClick={() => onPageChange(number)}
                  className="page-link"
                  style={{ cursor: "pointer" }}
                >
                  {number}
                </a>
              </li>
            ))}
            <li
              className={clsx("page-item", {
                disabled: currentPage === totalPages,
              })}
            >
              <a
                onClick={() => onPageChange(currentPage + 1)}
                className="page-link"
                style={{
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                Next
              </a>
            </li>
            <li
              className={clsx("page-item", {
                disabled: currentPage === totalPages,
              })}
            >
              <a
                onClick={() => onPageChange(totalPages)}
                className="page-link"
                style={{
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                Last
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
