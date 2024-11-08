import { useMemo } from 'react';
import { TurnedInNot } from '@mui/icons-material';
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { Note, setActiveNote, useAppDispatch } from '../../store';

export const SidebarItem = ({ title, body, id, imageUrls = [], date }: Note) => {
  const dispatch = useAppDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, imageUrls, date }));
  };

  return (
    <ListItem disablePadding onClick={onClickNote}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid2 container display="flex" direction="column">
          <ListItemText primary={newTitle} />

          <ListItemText secondary={body} />
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};
