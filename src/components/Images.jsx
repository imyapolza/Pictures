import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { setDelete, setModal } from '../redux/reducers/items.js';

export const Images = ({ items, loading }) => {
  const [modalUrl, setModalUrl] = React.useState(null);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.items.modal);

  function deleteItem(id) {
    dispatch(setDelete(id));
  }
  return (
    <ImageList
      sx={{ width: 1500, height: 400 }}
      cols={9}
      rowHeight={164}
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {modal === false ? (
        items.map((item) => (
          <ImageListItem key={item.id}>
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="delete"
                style={{ position: 'absolute' }}
                onClick={() => deleteItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Stack>
            <img
              src={`${item.thumbnailUrl}`}
              alt={`${item.title}`}
              loading="lazy"
              onClick={() => {
                dispatch(setModal(true));
                setModalUrl(item.url);
              }}
            />
          </ImageListItem>
        ))
      ) : (
        <div>
          <img src={modalUrl} alt="er" loading="lazy" onClick={() => dispatch(setModal(false))} />
        </div>
      )}
    </ImageList>
  );
};
