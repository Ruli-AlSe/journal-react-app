import { useMemo } from 'react';
import { TurnedInNot } from '@mui/icons-material';
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { Note } from '../../store';

export const SidebarItem = ({ title, body }: Note) => {
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  return (
    <ListItem disablePadding>
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
