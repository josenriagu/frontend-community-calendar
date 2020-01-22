import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import PaginationDiv from './index.styled';

const Pagination = ({
  items = [],
  Component,
  perPage,
  uniqueKey,
  position,
  ...rest
}) => {
  const cOfItems = [...items];
  const offset = 0;
  const [paginatedData, setPaginatedData] = useState(
    cOfItems.slice(offset, perPage),
  );
  //  Get the total pages necessary for the entire items 
  const pageCount = Math.ceil(items.length / perPage);

  const handlePageClick = data => {
    const { selected } = data;
    const newOffset = Math.ceil(selected * perPage);
    setPaginatedData(cOfItems.slice(newOffset, perPage + newOffset));
  };

  if (items.length === 0) return null;

  let paginationClass = '';
  //  Determine the position of the pagination component by setting the className appropriately
  switch (position) {
    case 'left':
      paginationClass = 'pagination';
      break;
    case 'right':
      paginationClass = 'pagination-right';
      break;

    case 'center':
      paginationClass = 'pagination-center';
      break;

    default:
      paginationClass = 'pagination-right';
  }
  return (
    <PaginationDiv>
      <div>
        {paginatedData.map(el => (
          <Component el={el} key={el[uniqueKey]} {...rest} />
        ))}
        <div className="pagination-section">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={paginationClass}
            subContainerClassName="pages"
            activeClassName="active"
            disabledClassName="disable-pagination"
            previousClassName="prevBtn"
          />
        </div>
      </div>
    </PaginationDiv>
  );
};
Pagination.propTypes = {
  Component: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  uniqueKey: PropTypes.string.isRequired,
  items: PropTypes.arrayOf.isRequired,
  position: PropTypes.string.isRequired,
};

export default Pagination;
