/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from '@mui/material/Button';

export const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Сортировка по страницам</h2>
      <ul
        className="paginations"
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {pageNumbers.map((number, index) => (
          <li className="page-item active" key={number} style={{ listStyleType: 'none' }}>
            <Button
              variant="contained"
              href="#"
              onClick={() => paginate(number)}
              color={`${currentPage === index + 1 ? 'warning' : 'primary'}`}>
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
