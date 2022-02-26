import React from 'react';

import axios from 'axios';
import { setCurrentPage, setItems, setLoading } from './redux/reducers/items';
import { useDispatch, useSelector } from 'react-redux';
import { Images } from './components/Images';
import { Pagination } from './components/Paginations.jsx/Pagination';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Sort } from './components/Sort';

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const loading = useSelector((state) => state.items.loading);
  const currentPage = useSelector((state) => state.items.currentPage);
  const itemsPerPage = useSelector((state) => state.items.itemsPerPage);

  React.useEffect(() => {
    const getItems = async () => {
      dispatch(setLoading(true));
      const res = await axios.get('http://jsonplaceholder.typicode.com/photos');
      dispatch(setItems(res.data));
      dispatch(setLoading(false));
    };

    getItems();
  }, [dispatch]);

  const lastItemIndex = currentPage * itemsPerPage;

  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));

  return (
    <div className="container">
      <div>
        {loading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
            <h1>Загрузка...</h1>
          </Box>
        )}

        <Sort></Sort>

        <Images items={currentItem} loading={loading} />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
