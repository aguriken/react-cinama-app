import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';

import './Paginate.scss';

export const Paginate = (props) => {
  const { currentPage, totalPages, paginate } = props;
  const [page, setPage] = useState();
  const [totalpageNumber, setTotalpageNumber] = useState();

  useEffect(() => {
    setPage(currentPage);

    setTotalpageNumber(totalPages);
  }, [currentPage, totalPages]);
  return (
    <>
      <span className="pageCount">
        {page} - {totalpageNumber}
      </span>
      <button className={page > 1 ? 'paginate-button' : 'paginate-button disable'} onClick={() => paginate('prev')}>
        Prev
      </button>
      <button className={page === totalpageNumber ? 'paginate-button disable' : 'paginate-button'} onClick={() => paginate('next')}>
        Next
      </button>
    </>
  );
};

Paginate.propTypes = {
  currentPage: Proptypes.number.isRequired,
  totalPages: Proptypes.number.isRequired,
  paginate: Proptypes.func.isRequired
};

export default Paginate;
