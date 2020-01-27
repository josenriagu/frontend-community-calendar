import React from "react";
import PropTypes from "prop-types";

const PaginationDiv = ({ children }) => (
  <div>
    <div>{children}</div>
    <style jsx global>{`
      .pagination-section {
        margin: 50px 0 0 0;
        color:#9c0d38
      }

      .disable-pagination {
          color:grey;
          cursor: not-allowed;
      }

      .disable-pagination a {
        color:grey;
        cursor: not-allowed;
    }
      .pagination {
        width: 300px;
        display: flex;
        justify-content: space-between;
      }

      .pagination-center {
        width: 300px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
      }

      .pagination-right {
        display: flex;
        justify-content: flex-end;
      }

      .pagination li {
        margin: 0 10px;
      }

      .pagination-center li {
        margin: 0 10px;
      }

      .pagination-right li {
        margin: 0 10px;
        color:red;
      }

      .pagination li a {
        color:#9c0d38;
        font-weight:bold;
      }

      .pagination-right li a {
        color:#9c0d38;
        font-weight:bold;
      }

      .pagination-center li a {
        color:#9c0d38;
        font-weight:bold;
      }

      .pages {
        color:#9c0d38
        padding: 4px;
      }

      .active {
        color: red;
        padding: 0 8px;
        border: 1px solid #9c0d38;
        border-radius: 5px;
      }
    `}</style>
  </div>
);

PaginationDiv.propTypes = {
  children: PropTypes.func.isRequired
};

export default PaginationDiv;
