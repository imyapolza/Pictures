import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSort } from '../redux/reducers/items.js';

export const Sort = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  let count = 2;

  for (let i = 1; i < items.length; i++) {
    if (items[i].albumId === 1) {
      count++;
      count++;
    }
  }

  let arrCount = [];

  for (let i = 1; i <= count; i++) {
    arrCount.push(i);
  }

  return (
    <header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          maxHeight: '500px',
          flexWrap: 'wrap',
        }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>Сортировка по ID альбома</div>
        <ul
          className="sort"
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {arrCount.map((item, index) => (
            <button key={`${item}_${index}`} onClick={() => dispatch(setSort(item))}>
              {item}
            </button>
          ))}
        </ul>
      </div>
    </header>
  );
};
